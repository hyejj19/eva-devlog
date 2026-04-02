import React from 'react';
import ContentLayout from '../components/post/ContentLayout';
import Intro from '../components/home/Intro';
import PostList from '../components/common/PostList';
import TagList from '../components/common/TagList';
import {
  getAllUnifiedArticles,
  getUnifiedTagList,
} from '../utils/unified-articles';

export default function Page() {
  const articleDatas = getAllUnifiedArticles();
  const tagList = getUnifiedTagList();

  return (
    <>
      <Intro />
      <ContentLayout>
        <TagList tagList={tagList} />
        <PostList articleDatas={articleDatas} />
      </ContentLayout>
    </>
  );
}
