import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { notion, databaseId } from './client';
import { IArticleFile } from '../../types/article';
import { getPageContent } from './blocks-to-markdown';

// Notion 속성에서 값 추출 헬퍼 함수들
function getTitle(page: PageObjectResponse): string {
  const prop = page.properties.Title;
  if (prop?.type === 'title') {
    return prop.title.map((t) => t.plain_text).join('');
  }
  return '';
}

function getRichText(page: PageObjectResponse, propName: string): string {
  const prop = page.properties[propName];
  if (prop?.type === 'rich_text') {
    return prop.rich_text.map((t) => t.plain_text).join('');
  }
  return '';
}

function getDate(page: PageObjectResponse, propName: string): string {
  const prop = page.properties[propName];
  if (prop?.type === 'date' && prop.date) {
    return prop.date.start;
  }
  return '';
}

function getSelect(page: PageObjectResponse, propName: string): string {
  const prop = page.properties[propName];
  if (prop?.type === 'select' && prop.select) {
    return prop.select.name;
  }
  return '';
}

function getUrl(page: PageObjectResponse, propName: string): string {
  const prop = page.properties[propName];
  if (prop?.type === 'url' && prop.url) {
    return prop.url;
  }
  // Files 타입 처리
  if (prop?.type === 'files' && prop.files.length > 0) {
    const file = prop.files[0];
    if (file.type === 'external') return file.external.url;
    if (file.type === 'file') return file.file.url;
  }
  return '';
}

// Notion 페이지를 IArticleFile로 변환
async function notionPageToArticle(
  page: PageObjectResponse,
  includeContent: boolean = false,
): Promise<IArticleFile> {
  const title = getTitle(page);
  // Slug 우선순위: Slug 속성 → Title → notion-페이지ID
  const slug = getRichText(page, 'Slug') || title || `notion-${page.id.replace(/-/g, '')}`;

  let content = '';
  if (includeContent) {
    content = await getPageContent(page.id);
  }

  return {
    slug,
    title,
    date: getDate(page, 'Date'),
    updatedDate: getDate(page, 'UpdatedDate'),
    image: getUrl(page, 'Image'),
    excerpt: getRichText(page, 'Excerpt'),
    tag: getSelect(page, 'Tag'),
    content,
    source: 'notion',
    notionPageId: page.id,
  };
}

// 게시된 모든 Notion 글 목록 가져오기
export async function getAllNotionArticles(): Promise<IArticleFile[]> {
  if (!databaseId) {
    // eslint-disable-next-line no-console
    console.warn('NOTION_DATABASE_ID is not set');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const articles = await Promise.all(
      response.results
        .filter((page): page is PageObjectResponse => 'properties' in page)
        .map((page) => notionPageToArticle(page, false)),
    );

    return articles;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch Notion articles:', error);
    return [];
  }
}

// 특정 Notion 글 상세 가져오기 (slug로 검색, fallback으로 Title 검색)
export async function getNotionArticleBySlug(
  slug: string,
): Promise<IArticleFile | null> {
  if (!databaseId) {
    return null;
  }

  // URL 디코딩 처리 (한글 slug 지원)
  const decodedSlug = decodeURIComponent(slug);

  try {
    // 1차: Slug 속성으로 검색
    let response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: decodedSlug,
            },
          },
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    // 2차: Slug로 못 찾으면 Title로 검색 (fallback)
    if (response.results.length === 0) {
      response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          and: [
            {
              property: 'Title',
              title: {
                equals: decodedSlug,
              },
            },
            {
              property: 'Published',
              checkbox: {
                equals: true,
              },
            },
          ],
        },
      });
    }

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0] as PageObjectResponse;
    return await notionPageToArticle(page, true);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch Notion article by slug:', error);
    return null;
  }
}

// Notion 페이지 ID로 글 가져오기
export async function getNotionArticleById(
  pageId: string,
): Promise<IArticleFile | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    if (!('properties' in page)) return null;
    return await notionPageToArticle(page as PageObjectResponse, true);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch Notion page:', error);
    return null;
  }
}
