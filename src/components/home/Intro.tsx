import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="w-full flex items-center mt-32">
      <article className="flex items-end w-full">
        <Image
          src="/profile_devlog.webp"
          alt="프로필 이미지"
          width="120"
          height="120"
          priority
          quality={100}
          placeholder="blur"
          blurDataURL="/profile_devlog.webp"
          className="mr-5 w-20 h-20 sm:w-[120px] sm:h-[120px]"
        />

        <div className="max-w-[400px] text-sm sm:text-base">
          <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Eva</p>
          <p>프론트엔드 개발자 에바 입니다.</p>
          <p>이 곳은 제가 공부하고 느낀 것을 기록하는 공간입니다.</p>
        </div>

        <div className="ml-auto hidden md:block">
          <Link href="https://friedegg556.tistory.com/" target="_blank">
            <span className="text-xs text-gray-600 dark:text-gray-300 hover-text">
              이전 블로그 방문하기
            </span>
          </Link>
        </div>
      </article>
    </section>
  );
}
