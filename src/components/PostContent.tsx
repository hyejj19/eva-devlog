'use client';

import NotionPageRenderer from './NotionPageRenderer';

export default function PostContent({ recordMap }) {
  return (
    <article className="w-full h-full">
      <NotionPageRenderer recordMap={recordMap} />
    </article>
  );
}
