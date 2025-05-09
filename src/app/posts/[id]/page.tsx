import { Metadata } from 'next';
import React from 'react';
import ContentLayout from '../../../components/post/ContentLayout';
import PostContent from '../../../components/post/PostContent';
import { getArticleData } from '../../../utils/articles-utils';

export async function generateMetadata({ params }): Promise<Metadata> {
  const { id: slug } = params;
  const articleData = getArticleData(slug);

  return {
    title: articleData.title,
    description: articleData.excerpt,
    openGraph: {
      title: articleData.title,
      description: articleData.excerpt,
      type: 'article',
      publishedTime: articleData.date,
      images: [articleData.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: articleData.title,
      description: articleData.excerpt,
      images: [articleData.image],
    },
  };
}

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
