import React from 'react';
import ContentLayout from '../../components/post/ContentLayout';
import TagList from '../../components/common/TagList';
import PostList from '../../components/common/PostList';
import { getAllArticles } from '../../utils/articles-utils';

export default async function PostsPage() {
  const articleDatas = getAllArticles();

  return (
    <section className="container">
      <ContentLayout>
        <TagList />
        <PostList articleDatas={articleDatas} />
      </ContentLayout>
    </section>
  );
}
