import { Client } from '@notionhq/client';

const notionClient = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

const database_id = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

export const getPosts = async () => {
  const response = await notionClient.databases.query({
    database_id,
    sorts: [
      {
        property: 'published',
        direction: 'descending',
      },
    ],
  });

  return response.results;
};

export const getPost = async (id: string) => {
  return await notionClient.pages.retrieve({ page_id: id });
};

export const getPostContent = async (id: string) => {
  const baseQuery = {
    block_id: id,
    page_size: 100,
  };
  let results = [];
  let postContent = await notionClient.blocks.children.list(baseQuery);
  results = [...postContent.results];

  return results;
};
