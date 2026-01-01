import { Client } from '@notionhq/client';

// Notion API 클라이언트 싱글톤
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID || '';

export { notion, databaseId };
