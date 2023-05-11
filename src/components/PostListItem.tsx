import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostListItem() {
  const { pathname } = useRouter();

  return (
    <Link href={'/blog/1'}>
      <div className="w-full flex p-2 hover:bg-light-teal hover:transition-colors rounded-md items-center cursor-pointer">
        {pathname === '/' ? (
          <>
            <span className="text-base">
              Next.js 와 Notion API를 활용해 블로그를 만들어 보았습니다.
            </span>
            <span className="hidden text-xs sm:block ml-auto text-main-teal">
              2023.04.26
            </span>
          </>
        ) : (
          <>
            <div className="w-full flex flex-col space-y-5">
              <div className="flex w-full justify-between text-main-teal">
                <span className="text-xs"># React</span>
                <span className="text-xs hidden sm:block">2023.04.26</span>
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
