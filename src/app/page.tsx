import React from 'react';
import ContentLayout from '../components/ContentLayout';
import Intro from '../components/Intro';
import PostList from '../components/PostList';
import TagList from '../components/TagList';
import { getPosts } from '../libs/notion';

export default async function Page() {
  const postInfos = await getPosts();

  return (
    <>
      <Intro />
      <ContentLayout>
        <TagList />
        <PostList postInfos={postInfos} />
      </ContentLayout>
    </>
  );
}
