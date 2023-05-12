import React from 'react';
import ContentLayout from '../../components/ContentLayout';
import TagList from '../../components/TagList';
import PostList from '../../components/PostList';
import { getPosts } from '../../libs/notion';

export default async function PostsPage() {
  const postInfos = await getPosts();

  return (
    <section className="container">
      <ContentLayout>
        <TagList />
        <PostList postInfos={postInfos} />
      </ContentLayout>
    </section>
  );
}
