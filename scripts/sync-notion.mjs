#!/usr/bin/env node
/**
 * Notion → Markdown sync script
 *
 * Fetches published articles from the Notion database,
 * converts them to markdown files with frontmatter,
 * and downloads Notion-hosted images locally.
 *
 * Usage:
 *   NOTION_API_KEY=xxx NOTION_DATABASE_ID=yyy node scripts/sync-notion.mjs
 */

import { Client } from '@notionhq/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const ARTICLES_DIR = path.join(ROOT_DIR, 'public', 'articles');
const IMAGES_DIR = path.join(ROOT_DIR, 'public', 'images', 'notion');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!process.env.NOTION_API_KEY || !DATABASE_ID) {
  console.error('Error: NOTION_API_KEY and NOTION_DATABASE_ID are required');
  process.exit(1);
}

// Ensure output directories exist
fs.mkdirSync(IMAGES_DIR, { recursive: true });

// ─── Notion API helpers ─────────────────────────────────────

async function fetchPublishedPages() {
  const pages = [];
  let cursor = undefined;

  do {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: { equals: true },
      },
      sorts: [{ property: 'Date', direction: 'descending' }],
      start_cursor: cursor,
    });

    for (const page of response.results) {
      if ('properties' in page) pages.push(page);
    }

    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return pages;
}

async function getAllBlocks(blockId) {
  const blocks = [];
  let cursor = undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    for (const block of response.results) {
      if ('type' in block) blocks.push(block);
    }

    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

// ─── Image download ─────────────────────────────────────────

async function downloadImage(url, id) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`  Warning: Failed to download image ${id} (${response.status})`);
      return null;
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const ext = contentType.includes('png')
      ? 'png'
      : contentType.includes('gif')
        ? 'gif'
        : contentType.includes('webp')
          ? 'webp'
          : contentType.includes('svg')
            ? 'svg'
            : 'jpg';

    const filename = `${id}.${ext}`;
    const filepath = path.join(IMAGES_DIR, filename);

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(filepath, buffer);

    return `/images/notion/${filename}`;
  } catch (error) {
    console.warn(`  Warning: Error downloading image ${id}:`, error.message);
    return null;
  }
}

// ─── Block → Markdown conversion ────────────────────────────

function richTextToMarkdown(richText) {
  return richText
    .map((t) => {
      let text = t.plain_text;
      if (t.annotations.bold) text = `**${text}**`;
      if (t.annotations.italic) text = `*${text}*`;
      if (t.annotations.strikethrough) text = `~~${text}~~`;
      if (t.annotations.code) text = `\`${text}\``;
      if (t.type === 'text' && t.text.link) {
        text = `[${text}](${t.text.link.url})`;
      }
      return text;
    })
    .join('');
}

function richTextToPlainText(richText) {
  return richText.map((t) => t.plain_text).join('');
}

async function blockToMarkdown(block) {
  switch (block.type) {
    case 'paragraph': {
      const text = richTextToMarkdown(block.paragraph.rich_text);
      return text ? `${text}\n\n` : '\n';
    }
    case 'heading_1':
      return `# ${richTextToMarkdown(block.heading_1.rich_text)}\n\n`;
    case 'heading_2':
      return `## ${richTextToMarkdown(block.heading_2.rich_text)}\n\n`;
    case 'heading_3':
      return `### ${richTextToMarkdown(block.heading_3.rich_text)}\n\n`;
    case 'bulleted_list_item':
      return `- ${richTextToMarkdown(block.bulleted_list_item.rich_text)}\n`;
    case 'numbered_list_item':
      return `1. ${richTextToMarkdown(block.numbered_list_item.rich_text)}\n`;
    case 'to_do': {
      const checked = block.to_do.checked ? 'x' : ' ';
      return `- [${checked}] ${richTextToMarkdown(block.to_do.rich_text)}\n`;
    }
    case 'toggle':
      return `<details>\n<summary>${richTextToMarkdown(block.toggle.rich_text)}</summary>\n</details>\n\n`;
    case 'code': {
      const code = richTextToPlainText(block.code.rich_text);
      const lang = block.code.language || '';
      return `\`\`\`${lang}\n${code}\n\`\`\`\n\n`;
    }
    case 'image': {
      const caption = richTextToPlainText(block.image.caption);
      if (block.image.type === 'external') {
        return `![${caption}](${block.image.external.url})\n\n`;
      }
      // Notion file upload → download locally
      const localPath = await downloadImage(block.image.file.url, block.id);
      return localPath
        ? `![${caption}](${localPath})\n\n`
        : `![${caption}](${block.image.file.url})\n\n`;
    }
    case 'video': {
      const videoUrl =
        block.video.type === 'external'
          ? block.video.external.url
          : block.video.file?.url || '';
      return `[Video](${videoUrl})\n\n`;
    }
    case 'quote':
      return `> ${richTextToMarkdown(block.quote.rich_text)}\n\n`;
    case 'callout': {
      const icon =
        block.callout.icon?.type === 'emoji'
          ? `${block.callout.icon.emoji} `
          : '';
      return `> ${icon}${richTextToMarkdown(block.callout.rich_text)}\n\n`;
    }
    case 'divider':
      return '---\n\n';
    case 'bookmark': {
      const url = block.bookmark.url;
      const caption = richTextToPlainText(block.bookmark.caption);
      return `[${caption || url}](${url})\n\n`;
    }
    case 'embed':
      return `[Embed](${block.embed.url})\n\n`;
    case 'table_of_contents':
      return '';
    default:
      return '';
  }
}

// ─── Property extractors ────────────────────────────────────

function getTitle(page) {
  const prop = page.properties.Title;
  if (prop?.type === 'title') return prop.title.map((t) => t.plain_text).join('');
  return '';
}

function getRichText(page, propName) {
  const prop = page.properties[propName];
  if (prop?.type === 'rich_text')
    return prop.rich_text.map((t) => t.plain_text).join('');
  return '';
}

function getDate(page, propName) {
  const prop = page.properties[propName];
  if (prop?.type === 'date' && prop.date) return prop.date.start;
  return '';
}

function getSelect(page, propName) {
  const prop = page.properties[propName];
  if (prop?.type === 'select' && prop.select) return prop.select.name;
  return '';
}

async function getCoverImageUrl(page) {
  const prop = page.properties.Image;
  if (!prop) return '';

  if (prop.type === 'url' && prop.url) return prop.url;

  if (prop.type === 'files' && prop.files.length > 0) {
    const file = prop.files[0];
    if (file.type === 'external') return file.external.url;
    if (file.type === 'file') {
      const localPath = await downloadImage(
        file.file.url,
        `cover-${page.id.replace(/-/g, '')}`,
      );
      return localPath || '';
    }
  }

  return '';
}

// ─── Sync logic ─────────────────────────────────────────────

function escapeYamlString(str) {
  // If string contains single quotes, escape them by doubling
  if (str.includes("'")) return `'${str.replace(/'/g, "''")}'`;
  return `'${str}'`;
}

async function syncArticle(page) {
  const title = getTitle(page);
  const slug =
    getRichText(page, 'Slug') ||
    title ||
    `notion-${page.id.replace(/-/g, '')}`;
  const date = getDate(page, 'Date');
  const updatedDate = getDate(page, 'UpdatedDate');
  const tag = getSelect(page, 'Tag');
  const image = await getCoverImageUrl(page);

  // Fetch and convert content
  const blocks = await getAllBlocks(page.id);
  const markdownParts = [];
  for (const block of blocks) {
    markdownParts.push(await blockToMarkdown(block));
  }
  const content = markdownParts.join('').trim();

  // Build frontmatter (matches existing md format)
  const frontmatter = [
    '---',
    `title: ${escapeYamlString(title)}`,
    `date: '${date}'`,
    `updatedDate: '${updatedDate}'`,
    `image: '${image}'`,
    `excerpt: ''`,
    `tag: '${tag}'`,
    `notionPageId: '${page.id}'`,
    '---',
  ].join('\n');

  const fileContent = `${frontmatter}\n\n${content}\n`;
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);

  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`  + ${slug} (${title})`);

  return slug;
}

function cleanupUnpublished(syncedSlugs) {
  const existingFiles = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));
  let removed = 0;

  for (const file of existingFiles) {
    const filePath = path.join(ARTICLES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Only touch files that have notionPageId (i.e., synced from Notion)
    const match = content.match(/notionPageId:\s*'([^']+)'/);
    if (!match) continue; // Manual md file — skip

    const slug = file.replace(/\.md$/, '');
    if (!syncedSlugs.includes(slug)) {
      fs.unlinkSync(filePath);
      console.log(`  - ${slug} (unpublished)`);
      removed++;
    }
  }

  return removed;
}

// ─── Main ───────────────────────────────────────────────────

async function main() {
  console.log('Syncing Notion articles...\n');
  console.log('Fetching published articles from Notion...');

  const pages = await fetchPublishedPages();
  console.log(`Found ${pages.length} published articles.\n`);

  const syncedSlugs = [];

  for (const page of pages) {
    try {
      const slug = await syncArticle(page);
      syncedSlugs.push(slug);
    } catch (error) {
      console.error(`  ! Failed to sync page ${page.id}:`, error.message);
    }
  }

  console.log('\nCleaning up unpublished articles...');
  const removed = cleanupUnpublished(syncedSlugs);
  if (removed === 0) console.log('  (nothing to remove)');

  console.log(`\nDone. Synced ${syncedSlugs.length} articles.`);
}

main().catch((error) => {
  console.error('Sync failed:', error);
  process.exit(1);
});
