'use client';

import NotionPageRenderer from './NotionPageRenderer';

export default function PostContent({ recordMap }) {
  console.log(recordMap);

  return (
    <article className="w-full h-full">
      <NotionPageRenderer recordMap={recordMap} />
    </article>
  );
}
