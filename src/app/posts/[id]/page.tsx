import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import React from 'react';

import ContentLayout from '../../../components/post/ContentLayout';
import PostContent from '../../../components/post/PostContent';
import {
  getUnifiedArticle,
  getAllArticleSlugs,
} from '../../../utils/unified-articles';

// ISR: 1시간마다 재검증
export const revalidate = 3600;

// SSG를 위한 정적 경로 생성
export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({
    id: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id: slug } = await params;
  const articleData = await getUnifiedArticle(slug);

  if (!articleData) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: articleData.title,
    description: articleData.excerpt,
    openGraph: {
      title: articleData.title,
      description: articleData.excerpt,
      type: 'article',
      publishedTime: articleData.date,
      images: articleData.image ? [articleData.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: articleData.title,
      description: articleData.excerpt,
      images: articleData.image ? [articleData.image] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: slug } = await params;
  const articleData = await getUnifiedArticle(slug);

  if (!articleData) {
    notFound();
  }

  return (
    <section className="mt-16 w-full">
      <ContentLayout>
        <PostContent articleData={articleData} />
      </ContentLayout>
    </section>
  );
}
