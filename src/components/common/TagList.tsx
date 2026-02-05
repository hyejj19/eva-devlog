'use client';

import Link from 'next/link';
import { useState } from 'react';

interface TagListProps {
  tagList: string[];
}

export default function TagList({ tagList }: TagListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const tagsWithAmount = [
    ...tagList.reduce((acc, cur) => {
      if (!acc.get(cur)) return acc.set(cur, 1);
      return acc.set(cur, acc.get(cur) + 1);
    }, new Map()),
  ];

  return (
    <>
      {/* 데스크톱 버전 */}
      <article className="w-[280px] h-full hidden md:block">
        <h2 className="subtitle">Tags</h2>
        <ul className="flex flex-col gap-2 ds-body-sm pt-2">
          {tagsWithAmount.map(([tag, amount]) => (
            <li key={tag} className="hover-text">
              <Link href={`/posts?tag=${tag}`}>{`${tag} (${amount})`}</Link>
            </li>
          ))}
        </ul>
      </article>

      {/* 모바일 드롭다운 버전 */}
      <div className="md:hidden mb-6 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center py-3 px-4 ds-bg-elevated rounded-lg transition-colors duration-200 interactive"
          aria-expanded={isOpen}
          aria-controls="mobile-tag-menu">
          <span className="font-semibold ds-body">태그 필터</span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            id="mobile-tag-menu"
            className="mt-2 py-3 px-4 bg-surface dark:bg-surface-dark ds-border border rounded-lg">
            <ul className="flex flex-col gap-3 ds-body-sm">
              <li className="hover-text">
                <Link href="/posts" onClick={() => setIsOpen(false)}>
                  All ({tagList.length})
                </Link>
              </li>
              {tagsWithAmount.map(([tag, amount]) => (
                <li key={tag} className="hover-text">
                  <Link
                    href={`/posts?tag=${tag}`}
                    onClick={() => setIsOpen(false)}>
                    {`${tag} (${amount})`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
