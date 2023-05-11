// TODO: 페이지 확인하여 최근글 버튼 및 갯수 다르게 보이도록 만들기
// TODO: list 페이지인 경우 무한 스크롤 구현하기
// TODO: 검색한 Tags 별로 subtitle 내용 변경하기

import Link from 'next/link';
import PostListItem from './PostListItem';
import { useRouter } from 'next/router';

export default function PostList() {
  const { pathname } = useRouter();

  return (
    <article className="w-full h-full">
      <div className="flex justify-between items-baseline px-2">
        {pathname === '/' ? (
          <h2 className="subtitle">최근 글</h2>
        ) : (
          <h2 className="subtitle">All</h2>
        )}

        <Link href="/blog">
          {pathname === '/' && (
            <span className="text-main-orange text-sm md:text-base cursor-pointer hover:text-main-teal dark:hover:text-white transition-colors">
              더 보기
            </span>
          )}
        </Link>
      </div>

      <div className="w-full flex flex-col space-y-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <PostListItem key={item} />
        ))}
      </div>
    </article>
  );
}
