'use client';

import Link from 'next/link';

interface TagListProps {
  tagList: string[];
}

export default function TagList({ tagList }: TagListProps) {
  const tagsWithAmount = [
    ...tagList.reduce((acc, cur) => {
      if (!acc.get(cur)) return acc.set(cur, 1);
      return acc.set(cur, acc.get(cur) + 1);
    }, new Map()),
  ];

  return (
    <article className="w-[280px] h-full hidden md:block">
      <h2 className="subtitle">Tags</h2>
      <ul className="space-y-2 text-sm pt-2">
        {tagsWithAmount.map(([tag, amount]) => (
          <li key={tag} className="hover-text">
            <Link href={`/posts?tag=${tag}`}>{`${tag} (${amount})`}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
