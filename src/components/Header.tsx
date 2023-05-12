'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import DarkmodeToggle from './DarkmodeToggle';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header
      className={`flex w-full justify-between pt-5 pb-2 h-[80px] px-4 lg:px-0 items-end fixed max-w-[900px] bg-white dark:bg-deep-gray ${
        scrollPosition > 40 &&
        'bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm'
      }`}>
      <Link href={'/'}>
        <div className="cursor-pointer text-3xl font-bold">
          <span className="hover:text-main-orange hover:transition-colors">
            Develog
          </span>
          <span className="text-main-orange">.</span>
        </div>
      </Link>

      <nav className="flex">
        <div className="space-x-3 mr-4 hidden md:flex">
          <Link href={'/'}>
            <div className="hover-text">home</div>
          </Link>
          <Link href={'/blog'}>
            <div className="hover-text">posts</div>
          </Link>
          <Link href={'/resume'}>
            <div className="hover-text">resume</div>
          </Link>
        </div>
        <DarkmodeToggle />
      </nav>
    </header>
  );
}
