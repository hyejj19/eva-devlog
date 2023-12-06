import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const propertyTable = {
  Public: 'Public',
  Published: 'Published',
  Tags: 'Tags',
};

export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_KEY,
});

export const reactNotionApi = new NotionAPI();

const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

export const getDatabaseItems = async () => {
  const databaseItems = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'published',
        direction: 'descending',
      },
    ],
  });

  const { results } = databaseItems;

  const postsInfos = results.map((res: any) => {
    return {
      id: res.id,
      tags: res.properties.Tags.multi_select[0].name,
      title: res.properties.title.title[0].text.content,
      createdAt: res.created_time,
      slug: res.properties.slug.rich_text[0].text.content,
    };
  });

  return postsInfos;
};

export const getSearchItems = async (query: string) => {
  const searchItems = await notion.search({
    query,
    sort: {
      direction: 'descending',
      timestamp: 'last_edited_time',
    },
    filter: {
      property: 'object',
      value: 'page',
    },
    page_size: 12,
  });

  return searchItems.results as PageObjectResponse[];
};

export const getPageContent = async (pageId: string) => {
  const recordMap = await reactNotionApi.getPage(pageId);

  return recordMap;
};
