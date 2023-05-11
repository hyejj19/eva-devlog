import React from 'react';
import ContentLayout from '../src/components/ContentLayout';
import Intro from '../src/components/Intro';
import PostList from '../src/components/PostList';
import TagList from '../src/components/TagList';

export default function Page() {
  return (
    <>
      <Intro />
      <ContentLayout>
        <TagList />
        <PostList />
      </ContentLayout>
    </>
  );
}
