'use client';

import { IArticleFile } from '../../types/article';
import { extractHeadings } from '../../utils/extractHeadings';
import Article from './Article';
import ContentLayout from './ContentLayout';
import TableOfContents from './TableOfContents';

interface PostContentProps {
  articleData: IArticleFile;
}

export default function PostContent({ articleData }: PostContentProps) {
  const { content } = articleData;
  const headings = extractHeadings(content);

  return (
    <main className="w-full h-full">
      <ContentLayout>
        <TableOfContents headings={headings} />
        <Article articleData={articleData} />
      </ContentLayout>
    </main>
  );
}
