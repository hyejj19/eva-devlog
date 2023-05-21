'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NextApiPostInfoResp } from '../types/NextApiTypes';
import { formatDate } from '../libs/formatDate';

type PostListItemProps = {
  info: NextApiPostInfoResp;
};

export default function PostListItem({ info }: PostListItemProps) {
  const pathname = usePathname();

  const { tags, title, createdAt, id } = info;
  const formattedDate = formatDate(createdAt);

  return (
    <Link href={`/posts/${id}`}>
      <div className="w-full flex py-3 px-2 hover:bg-light-teal dark:hover:text-main-teal hover:transition-colors rounded-md items-center cursor-pointer">
        {pathname === '/' ? (
          <>
            <span className="text-base">{title}</span>
            <span className="hidden sm:block ml-auto small-text">
              {formattedDate}
            </span>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col space-y-3">
              <div className="flex w-full justify-between small-text">
                <span># {tags}</span>
                <span className="hidden sm:block">{formattedDate}</span>
              </div>
              <span className="text-base">{title}</span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
