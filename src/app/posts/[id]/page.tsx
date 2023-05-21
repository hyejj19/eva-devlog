import React from 'react';
import ContentLayout from '../../../components/ContentLayout';
import TableOfContents from '../../../components/TableOfContents';
import PostContent from '../../../components/PostContent';
import { getPostContent, getPosts } from '../../../libs/notion';
import { NextApiPostInfoResp } from '../../../types/NextApiTypes';

export default async function PostPage({ params }) {
  const contents = await getPostContent(params.id);

  return (
    <section className="mt-16 w-full">
      <ContentLayout>
        <TableOfContents />
        <PostContent contents={contents} />
      </ContentLayout>
    </section>
  );
}

export async function generateStaticParams({ params }: any) {
  const postInfos = await getPosts();

  const ids = postInfos.map((post: NextApiPostInfoResp) => ({
    id: post.id,
  }));

  return ids;
}
