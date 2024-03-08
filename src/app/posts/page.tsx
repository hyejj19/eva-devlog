import React from 'react';
import ContentLayout from '../../components/post/ContentLayout';
import TagList from '../../components/common/TagList';
import PostList from '../../components/common/PostList';
import { getAllArticles, getTagList } from '../../utils/articles-utils';

export default async function PostsPage() {
  const articleDatas = getAllArticles();
  const tagList = getTagList();

  return (
    <section className="container">
      <ContentLayout>
        <TagList tagList={tagList} />
        <PostList articleDatas={articleDatas} />
      </ContentLayout>
    </section>
  );
}
