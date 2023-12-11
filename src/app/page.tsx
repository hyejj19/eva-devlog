import React from 'react';
import ContentLayout from '../components/ContentLayout';
import Intro from '../components/Intro';
import PostList from '../components/PostList';
import TagList from '../components/TagList';
import { getAllArticles } from '../utils/articles-utils';

export default async function Page() {
  const articleDatas = getAllArticles();

  return (
    <>
      <Intro />
      <ContentLayout>
        <TagList />
        <PostList articleDatas={articleDatas} />
      </ContentLayout>
    </>
  );
}
