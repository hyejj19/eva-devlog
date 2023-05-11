'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="w-full flex items-center mt-32">
      <article className="flex items-end w-full">
        <Image
          src="/profile_develog.png"
          alt="프로필 이미지"
          width="120"
          height="120"
          priority
          quality={100}
          placeholder="blur"
          blurDataURL={'/profile_develog.png'}
          className="mr-5 w-20 h-20 sm:w-[120px] sm:h-[120px]"
        />

        <div className="max-w-[400px] text-sm sm:text-base">
          <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">
            안녕하세요!🖐️
          </p>
          <p>기록으로 성장하는 개발자 박혜정 입니다.</p>
          <p>공부하고 느낀 것을 블로그에 기록하고 있어요.</p>
        </div>

        <div className="ml-auto hidden md:block">
          <Link href={'https://friedegg556.tistory.com/'} target="_blank">
            <span className="text-xs text-gray-600 dark:text-gray-300 hover-text">
              이전 블로그 방문하기
            </span>
          </Link>
        </div>
      </article>
    </section>
  );
}
