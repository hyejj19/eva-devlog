import { Client } from '@notionhq/client';
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://example.com';

  return base_url;
};

const notionClient = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });

// TODO: 캐시, revalidation 옵션 등 추가 셋팅

// 블로그 목록 가져오기
export const getPosts = async () => {
  const response = await fetch(checkEnvironment().concat('/api/posts'));
  const data = response.json();

  return data;
};

// 블로그 포스트 프로퍼티 가져오기
export const getPost = async (id: string) => {
  return await notionClient.pages.retrieve({ page_id: id });
};

// 블로그 포스트 내용 가져오기
export const getPostContent = async (id: string) => {
  const baseQuery = {
    block_id: id,
    page_size: 100,
  };
  let results: (PartialBlockObjectResponse | BlockObjectResponse)[] = [];
  let postContent = await notionClient.blocks.children.list(baseQuery);
  results = [...postContent.results];

  return results;
};
