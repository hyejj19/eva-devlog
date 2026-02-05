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
      <div className="w-full flex py-3 px-4 card-hover dark:hover:text-main-teal rounded-md items-center cursor-pointer">
        {pathname === '/' ? (
          <>
            <span className="ds-body">{title}</span>
            <span className="hidden sm:block ml-auto ds-caption ds-text-muted">
              {date}
            </span>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col gap-2">
              <div className="flex w-full justify-between ds-caption ds-text-muted">
                <span># {tag}</span>
                <span className="hidden sm:block">{date}</span>
              </div>
              <span className="ds-body font-medium">{title}</span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
