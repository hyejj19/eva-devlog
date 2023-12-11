import React from 'react';
import ContentLayout from '../components/post/ContentLayout';
import Intro from '../components/home/Intro';
import PostList from '../components/common/PostList';
import TagList from '../components/common/TagList';
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
