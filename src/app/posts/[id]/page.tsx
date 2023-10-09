import React from 'react';
import ContentLayout from '../../../components/ContentLayout';
import TableOfContents from '../../../components/TableOfContents';
import PostContent from '../../../components/PostContent';
import { getPageContent } from '../../../utils/notion';

export default async function PostPage({ params }) {
  const { id } = params;
  const recordMap = await getPageContent(id);

  return (
    <section className="mt-16 w-full">
      <ContentLayout>
        <TableOfContents />
        <PostContent recordMap={recordMap} />
      </ContentLayout>
    </section>
  );
}
