'use client';

import { IArticleFile } from '../types/article';
import Article from './Article';
import ContentLayout from './ContentLayout';
import TableOfContents from './TableOfContents';

interface PostContentProps {
  articleData: IArticleFile;
}

export default function PostContent({ articleData }: PostContentProps) {
  return (
    <main className="w-full h-full">
      <ContentLayout>
        <TableOfContents />
        <Article articleData={articleData} />
      </ContentLayout>
    </main>
  );
}
