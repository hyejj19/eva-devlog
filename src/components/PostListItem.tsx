'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PostListItem() {
  const pathname = usePathname();

  return (
    <Link href={'/blog/1'}>
      <div className="w-full flex py-3 px-2 hover:bg-light-teal dark:hover:text-main-teal hover:transition-colors rounded-md items-center cursor-pointer">
        {pathname === '/' ? (
          <>
            <span className="text-base">
              Next.js 와 Notion API를 활용해 블로그를 만들어 보았습니다.
            </span>
            <span className="hidden sm:block ml-auto small-text">
              2023.04.26
            </span>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col space-y-3">
              <div className="flex w-full justify-between small-text">
                <span># React</span>
                <span className="hidden sm:block">2023.04.26</span>
              </div>
              <span className="text-base">
                Next.js 와 Notion API를 활용해 블로그를 만들어 보았습니다.
              </span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
