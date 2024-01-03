'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IArticleFile } from '../../types/article';

type PostListItemProps = {
  article: IArticleFile;
};

export default function PostListItem({ article }: PostListItemProps) {
  const pathname = usePathname();

  const { title, tag, date, slug } = article;

  return (
    <Link href={`/posts/${slug}`}>
      <div className="w-full flex py-3 px-2 hover:bg-light-teal dark:hover:text-main-teal hover:transition-colors rounded-md items-center cursor-pointer">
        {pathname === '/' ? (
          <>
            <span className="text-base">{title}</span>
            <span className="hidden sm:block ml-auto small-text">{date}</span>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col space-y-3">
              <div className="flex w-full justify-between small-text">
                <span># {tag}</span>
                <span className="hidden sm:block">{date}</span>
              </div>
              <span className="text-base">{title}</span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
