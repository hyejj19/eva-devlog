'use client';

import DOMPurify from 'isomorphic-dompurify';
import { NotionBlocksHtmlParser } from '@notion-stuff/blocks-html-parser';
import { formatDate } from '../libs/formatDate';

export default function PostContent({ contents }) {
  const { contentRes, propertiesRes } = contents;

  const parser = NotionBlocksHtmlParser.getInstance();
  const html = parser.parse(contentRes);

  return (
    <article className="w-full h-full">
      <div className="flex px-2 pb-3 flex-col mb-10 border-b">
        <h1 className="title">
          {propertiesRes.properties.title.title[0].plain_text}
        </h1>
        <div className="flex flex-col w-full items-end space-y-2 mt-2 small-text">
          <span className="text-xs">
            # {propertiesRes.properties.Tags.multi_select[0].name}
          </span>
          <span className="text-xs">
            {formatDate(propertiesRes.created_time)}
          </span>
        </div>
      </div>

      <div
        className="w-full flex flex-col px-2 mb-16"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
      />
    </article>
  );
}
