import React from 'react';
import ContentLayout from '../components/ContentLayout';
import Intro from '../components/Intro';
import PostList from '../components/PostList';
import TagList from '../components/TagList';

export default function Page() {
  return (
    <>
      <Intro />
      <ContentLayout>
        <TagList />
        {/* <PostList /> */}
      </ContentLayout>
    </>
  );
}
