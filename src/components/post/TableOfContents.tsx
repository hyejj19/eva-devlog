'use client';

import { useEffect, useState } from 'react';

import { HeadingItem } from '../../utils/extractHeadings';

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headingElements = headings
      .map((h) => document.getElementById(h.text))
      .filter((el): el is HTMLElement => el !== null);

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0,
      },
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  const scrollEvent = (e: React.MouseEvent, headline: string) => {
    e.preventDefault();

    document.getElementById(headline)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <article className="w-[280px] h-full md:block sticky top-[100px] hidden">
      <h2 className="subtitle">Contents</h2>
      <ul className="space-y-2 text-sm pt-2">
        {headings.map((heading) => (
          <li
            className={`hover-text ${heading.level === 3 ? 'pl-4' : ''}`}
            key={heading.text}>
            <a
              href={`#${heading.text}`}
              onClick={(e) => scrollEvent(e, heading.text)}
              className={`transition-colors ${
                activeId === heading.text
                  ? 'text-main-orange font-semibold'
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
