import React from 'react';
import ContentLayout from '../../../components/post/ContentLayout';
import PostContent from '../../../components/post/PostContent';
import { getArticleData } from '../../../utils/articles-utils';

export default async function PostPage({ params }) {
  const { id: slug } = params;
  const articleData = getArticleData(slug);

  return (
    <section className="mt-16 w-full">
      <ContentLayout>
        <PostContent articleData={articleData} />
      </ContentLayout>
    </section>
  );
}
