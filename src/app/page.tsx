import React from 'react';
import ContentLayout from '../components/ContentLayout';
import Intro from '../components/Intro';
import PostList from '../components/PostList';
import TagList from '../components/TagList';
import { getDatabaseItems } from '../utils/notion';

export default async function Page() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  const databaseItems = await getDatabaseItems(databaseId);

  return (
    <>
      <Intro />
      <ContentLayout>
        <TagList />
        <PostList postInfos={databaseItems} />
      </ContentLayout>
    </>
  );
}
