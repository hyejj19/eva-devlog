'use client';

interface TableOfContentsProps {
  headings: string[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  return (
    <article className="w-[280px] h-full md:block">
      <h2 className="subtitle">Contents</h2>
      <ul className="space-y-2 text-sm pt-2">
        {headings.map((headline) => (
          <li className="hover-text">
            <a href={`#${headline.replace(/#|\*/g, '').trim()}`}>
              {headline.replace(/#|\*/g, '')}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
