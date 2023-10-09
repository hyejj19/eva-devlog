import React from 'react';
import ContentLayout from '../../components/ContentLayout';
import TagList from '../../components/TagList';
import PostList from '../../components/PostList';
import { getDatabaseItems } from '../../utils/notion';

export default async function PostsPage() {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
  const databaseItems = await getDatabaseItems(databaseId);

  return (
    <section className="container">
      <ContentLayout>
        <TagList />
        <PostList postInfos={databaseItems} />
      </ContentLayout>
    </section>
  );
}
