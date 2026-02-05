'use client';

import Link from 'next/link';
import DarkmodeToggle from './DarkmodeToggle';

export default function Header() {
  return (
    <header
      className={`flex w-full justify-between pt-6 pb-2 h-[80px] container-padding items-end fixed max-w-[900px]
        bg-surface dark:bg-surface-dark bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm`}>
      <Link href="/">
        <div className="cursor-pointer ds-h1 interactive">
          <span className="hover:text-main-orange transition-colors">
            Evalog
          </span>
          <span className="text-main-orange">.</span>
        </div>
      </Link>

      <nav className="flex w-full justify-end items-center">
        <div className="flex gap-4 mr-4">
          <Link href="/posts">
            <div className="hover-text ds-body">posts</div>
          </Link>
          {/* <Link href="/resume">
            <div className="hover-text ds-body">resume</div>
          </Link> */}
        </div>
        <DarkmodeToggle />
      </nav>
    </header>
  );
}
