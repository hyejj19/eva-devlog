/* eslint-disable react/no-unstable-nested-components */
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import { formatDate } from '../utils/formatDate';

const Code = dynamic(
  () => import('react-notion-x/build/third-party/code').then((m) => m.Code),
  {
    ssr: false,
  },
);

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
);

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap;
}

const NotionPageRenderer = ({ recordMap }: NotionPageRendererProps) => {
  return (
    <NotionRenderer
      recordMap={recordMap}
      disableHeader
      showTableOfContents
      components={{
        Code,
        Collection: (collection) => {
          const { block } = collection;
          return (
            <div className="flex w-full px-2 pb-3 flex-col mb-10 border-b">
              <h1 className="title">{block.properties.title[0]}</h1>
              <div className="flex flex-col w-full items-end space-y-2 mt-2 small-text">
                <span className="text-xs"># {block.properties['>l?c'][0]}</span>
                <span className="text-xs">
                  {formatDate(block.created_time)}
                </span>
              </div>
            </div>
          );
        },
        Equation,
        nextImage: Image,
        nextLink: Link,
        propertyDateValue: (dateProperty) =>
          dateProperty.data[0][1][0][1].start_date,
      }}
    />
  );
};

export default NotionPageRenderer;
