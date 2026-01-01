import React from 'react';
import ContentLayout from '../../components/post/ContentLayout';
import TagList from '../../components/common/TagList';
import PostList from '../../components/common/PostList';
import {
  getAllUnifiedArticles,
  getUnifiedTagList,
} from '../../utils/unified-articles';

// ISR: 1시간마다 재검증
export const revalidate = 3600;

export default async function PostsPage() {
  const articleDatas = await getAllUnifiedArticles();
  const tagList = await getUnifiedTagList();

  return (
    <section className="container">
      <ContentLayout>
        <TagList tagList={tagList} />
        <PostList articleDatas={articleDatas} />
      </ContentLayout>
    </section>
  );
}
