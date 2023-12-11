// TODO: 페이지 확인하여 최근글 버튼 및 갯수 다르게 보이도록 만들기
// TODO: list 페이지인 경우 무한 스크롤 구현하기
// TODO: 검색한 Tags 별로 subtitle 내용 변경하기

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PostListItem from './PostListItem';
import { IArticleFile } from '../types/article';

type PostListProps = {
  articleDatas: IArticleFile[];
};

export default function PostList({ articleDatas }: PostListProps) {
  const pathname = usePathname();

  return (
    <article className="w-full h-full">
      {/* 최근글 || All && 더보기 */}
      <div className="flex justify-between items-baseline px-2">
        {pathname === '/' ? (
          <h2 className="subtitle">최근 글</h2>
        ) : (
          <h2 className="subtitle">All</h2>
        )}

        <Link href="/posts">
          {pathname === '/' && (
            <span className="text-main-orange text-sm md:text-base cursor-pointer hover:text-main-teal dark:hover:text-white transition-colors">
              더 보기
            </span>
          )}
        </Link>
      </div>

      <div className="w-full flex flex-col space-y-2">
        {articleDatas.map((article) => (
          <PostListItem key={article.slug} article={article} />
        ))}
      </div>
    </article>
  );
}
