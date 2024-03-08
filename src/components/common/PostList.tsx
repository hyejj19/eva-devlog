// TODO: list 페이지인 경우 무한 스크롤 구현하기

'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PostListItem from './PostListItem';
import { IArticleFile } from '../../types/article';

type PostListProps = {
  articleDatas: IArticleFile[];
};

export default function PostList({ articleDatas }: PostListProps) {
  const pathname = usePathname();
  const category = useSearchParams().get('tag');

  const [filteredArticles, setFilteredArticles] = useState(articleDatas);

  useEffect(() => {
    if (category) {
      return setFilteredArticles(
        articleDatas.filter((article) => article.tag === category),
      );
    }
    setFilteredArticles(articleDatas);
  }, [category]);

  return (
    <article className="w-full h-full">
      {pathname === '/' ? (
        <>
          <div className="flex justify-between items-baseline px-2">
            <h2 className="subtitle">최근 글</h2>
            <Link href="/posts">
              <span className="text-main-orange text-sm md:text-base cursor-pointer hover:text-main-teal dark:hover:text-white transition-colors">
                더 보기
              </span>
            </Link>
          </div>

          <div className="w-full flex flex-col space-y-2">
            {articleDatas.slice(0, 10).map((article) => (
              <PostListItem key={article.slug} article={article} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-baseline px-2">
            <h2 className="subtitle">{`${category ?? 'All'}`}</h2>
          </div>
          <div className="w-full flex flex-col space-y-2">
            {filteredArticles.map((article) => (
              <PostListItem key={article.slug} article={article} />
            ))}
          </div>
        </>
      )}
    </article>
  );
}
