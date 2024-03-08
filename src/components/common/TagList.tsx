'use client';

interface TagListProps {
  tagList: string[];
}

export default function TagList({ tagList }: TagListProps) {
  const tagsWithAmount: Record<string, number> = tagList.reduce((acc, cur) => {
    if (!acc[cur]) return { ...acc, [cur]: 1 };
    return { ...acc, [cur]: acc[cur] + 1 };
  }, {});

  return (
    <article className="w-[280px] h-full hidden md:block">
      <h2 className="subtitle">Tags</h2>
      <ul className="space-y-2 text-sm pt-2">
        {Object.entries(tagsWithAmount).map((tag) => (
          <li key={tag[0]} className="hover-text">
            {`${tag[0]} (${tag[1]})`}
          </li>
        ))}
      </ul>
    </article>
  );
}
