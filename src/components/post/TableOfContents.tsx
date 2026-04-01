'use client';

import { useEffect, useState, useCallback } from 'react';

import { HeadingItem } from '../../utils/extractHeadings';

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = useCallback(() => {
    if (headings.length === 0) return;

    const [firstHeading] = headings;
    const lastHeading = headings[headings.length - 1];

    const scrollPosition = window.scrollY + 150;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 페이지 하단에 도달했는지 확인 (마지막 섹션 처리)
    const isAtBottom = window.scrollY + windowHeight >= documentHeight - 50;

    if (isAtBottom) {
      setActiveId(lastHeading.text);
      return;
    }

    // 각 heading의 위치를 확인하여 현재 활성 섹션 결정
    let currentActiveId = '';

    for (const heading of headings) {
      const element = document.getElementById(heading.text);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= elementTop) {
          currentActiveId = heading.text;
        } else {
          break;
        }
      }
    }

    // 첫 번째 heading 이전이면 첫 번째를 활성화
    if (!currentActiveId && firstHeading) {
      const firstElement = document.getElementById(firstHeading.text);
      if (firstElement) {
        const firstElementTop =
          firstElement.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition < firstElementTop) {
          currentActiveId = firstHeading.text;
        }
      }
    }

    setActiveId(currentActiveId);
  }, [headings]);

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollEvent = (e: React.MouseEvent, headline: string) => {
    e.preventDefault();

    document.getElementById(headline)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <article className="w-[280px] md:block sticky top-[100px] hidden shrink-0 self-start">
      <h2 className="subtitle">Contents</h2>
      <ul className="flex flex-col gap-2 ds-body-sm pt-2 border-l-2 border-border dark:border-border-dark max-h-[calc(100vh-180px)] overflow-y-auto">
        {headings.map((heading) => (
          <li
            className={`-ml-[2px] transition-all duration-200 ${heading.level === 3 ? 'pl-6' : 'pl-4'} ${
              activeId === heading.text
                ? 'border-l-2 border-main-orange text-main-orange font-semibold'
                : 'border-l-2 border-transparent hover-text ds-text-muted'
            }`}
            key={heading.text}>
            <a
              href={`#${heading.text}`}
              onClick={(e) => scrollEvent(e, heading.text)}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
