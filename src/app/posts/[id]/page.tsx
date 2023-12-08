import React from 'react';
import ContentLayout from '../../../components/ContentLayout';
import PostContent from '../../../components/PostContent';
import { getPageContent } from '../../../utils/notion';

export default async function PostPage({ params }) {
  const { id: pageId } = params;
  const recordMap = await getPageContent(pageId);

  return (
    <section className="mt-16 w-full">
      <ContentLayout>
        <PostContent recordMap={recordMap} />
      </ContentLayout>
    </section>
  );
}
