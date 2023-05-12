import React from 'react';
import ContentLayout from '../../components/ContentLayout';
import TagList from '../../components/TagList';
import PostList from '../../components/PostList';
import { getPosts } from '../../libs/notion';

// TODO: Notion API와 연동

export default async function PostsPage() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <section className="container">
      <ContentLayout>
        <TagList />
        <PostList posts={posts} />
      </ContentLayout>
    </section>
  );
}
