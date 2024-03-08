'use client';

interface TableOfContentsProps {
  headings: string[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const scollEvent = (e: React.MouseEvent, headline: string) => {
    e.preventDefault();

    document.getElementById(`${headline}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <article className="w-[280px] h-full md:block sticky top-[100px] hidden">
      <h2 className="subtitle">Contents</h2>
      <ul className="space-y-2 text-sm pt-2">
        {headings.map((headline) => (
          <li className="hover-text">
            <a href={`#${headline}`} onClick={(e) => scollEvent(e, headline)}>
              {headline}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
