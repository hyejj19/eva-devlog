import Link from 'next/link';
import { useEffect, useState } from 'react';

// TODO: 다크모드 컴포넌트 슬라이드로 만들기
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
      className={`flex w-full justify-between pt-5 pb-2 h-[80px] px-3 lg:px-0 items-end bg-white fixed max-w-[900px] transition-all border-b border-b-1 border-transparent ${
        scrollPosition > 80 && 'border-gray-200'
      }`}>
      <Link href={'/'}>
        <div className="cursor-pointer text-3xl font-bold">
          <span className="hover:text-main-orange transition-colors">
            Develog
          </span>
          <span className="text-main-orange">.</span>
        </div>
      </Link>

      <nav className="flex space-x-3">
        <div className="hover-text">home</div>
        <div className="hover-text">posts</div>
        <div className="hover-text">resume</div>
        <div className="hover-text">다크모드</div>
      </nav>
    </header>
  );
}
