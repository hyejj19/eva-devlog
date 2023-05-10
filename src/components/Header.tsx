import Link from 'next/link';
import { useEffect, useState } from 'react';
import DarkmodeToggle from './DarkmodeToggle';

// TODO: 다크모드 컴포넌트 토글 만들기
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
      className={`flex w-full justify-between pt-5 pb-2 h-[80px] px-4 lg:px-0 items-end bg-white fixed max-w-[900px] transition-all border-b border-b-1 border-transparent ${
        scrollPosition > 50 && 'border-gray-200'
      }`}>
      <Link href={'/'}>
        <div className="cursor-pointer text-3xl font-bold">
          <span className="hover:text-main-orange transition-colors">
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
