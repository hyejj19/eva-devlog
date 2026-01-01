import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

import { notion } from './client';

// 모든 블록 가져오기 (페이지네이션 처리)
async function getAllBlocks(blockId: string): Promise<BlockObjectResponse[]> {
  const blocks: BlockObjectResponse[] = [];
  let cursor: string | null = null;
  let hasMore = true;

  while (hasMore) {
    /* eslint-disable no-await-in-loop */
    const response: ListBlockChildrenResponse =
      await notion.blocks.children.list({
        block_id: blockId,
        start_cursor: cursor || undefined,
        page_size: 100,
      });
    /* eslint-enable no-await-in-loop */

    response.results.forEach((block) => {
      if ('type' in block) {
        blocks.push(block);
      }
    });

    hasMore = response.has_more;
    cursor = response.next_cursor;
  }

  return blocks;
}

// RichText 배열을 텍스트로 변환
function richTextToPlainText(richText: RichTextItemResponse[]): string {
  return richText.map((t) => t.plain_text).join('');
}

// RichText 배열을 마크다운으로 변환 (볼드, 이탤릭 등 처리)
function richTextToMarkdown(richText: RichTextItemResponse[]): string {
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

// Notion 블록을 마크다운으로 변환
function blockToMarkdown(block: BlockObjectResponse): string {
  switch (block.type) {
    case 'paragraph': {
      const paragraphText = richTextToMarkdown(block.paragraph.rich_text);
      return paragraphText ? `${paragraphText}\n\n` : '\n';
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
      let imageUrl = '';
      if (block.image.type === 'external') {
        imageUrl = block.image.external.url;
      } else if (block.image.type === 'file') {
        imageUrl = block.image.file.url;
      }
      const caption = richTextToPlainText(block.image.caption);
      return `![${caption}](${imageUrl})\n\n`;
    }

    case 'video': {
      let videoUrl = '';
      if (block.video.type === 'external') {
        videoUrl = block.video.external.url;
      } else if (block.video.type === 'file') {
        videoUrl = block.video.file.url;
      }
      return `[Video](${videoUrl})\n\n`;
    }

    case 'quote':
      return `> ${richTextToMarkdown(block.quote.rich_text)}\n\n`;

    case 'callout': {
      const iconEmoji =
        block.callout.icon?.type === 'emoji'
          ? `${block.callout.icon.emoji} `
          : '';
      return `> ${iconEmoji}${richTextToMarkdown(block.callout.rich_text)}\n\n`;
    }

    case 'divider':
      return '---\n\n';

    case 'bookmark': {
      const bookmarkUrl = block.bookmark.url;
      const bookmarkCaption = richTextToPlainText(block.bookmark.caption);
      return `[${bookmarkCaption || bookmarkUrl}](${bookmarkUrl})\n\n`;
    }

    case 'embed':
      return `[Embed](${block.embed.url})\n\n`;

    case 'table_of_contents':
      return ''; // 목차는 별도 처리 필요시 구현

    default:
      return '';
  }
}

// Notion 페이지 콘텐츠를 마크다운으로 변환
export async function getPageContent(pageId: string): Promise<string> {
  try {
    const blocks = await getAllBlocks(pageId);
    const markdown = blocks.map(blockToMarkdown).join('');
    return markdown.trim();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to parse Notion blocks:', error);
    return '';
  }
}
