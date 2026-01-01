import React from 'react';
import ContentLayout from '../components/post/ContentLayout';
import Intro from '../components/home/Intro';
import PostList from '../components/common/PostList';
import TagList from '../components/common/TagList';
import {
  getAllUnifiedArticles,
  getUnifiedTagList,
} from '../utils/unified-articles';

// ISR: 1시간마다 재검증
export const revalidate = 3600;

export default async function Page() {
  const articleDatas = await getAllUnifiedArticles();
  const tagList = await getUnifiedTagList();

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
