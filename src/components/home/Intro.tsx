import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="w-full flex items-center mt-24 md:mt-32">
      <article className="flex items-end w-full gap-4 md:gap-6">
        <Image
          src="/profile_devlog.webp"
          alt="프로필 이미지"
          width="120"
          height="120"
          priority
          quality={100}
          placeholder="blur"
          blurDataURL="/profile_devlog.webp"
          className="w-20 h-20 sm:w-[120px] sm:h-[120px] rounded-full"
        />

        <div className="max-w-[400px] ds-body-sm sm:ds-body ds-text-primary">
          <p className="ds-h3 mb-2">Eva</p>
          <p className="ds-text-secondary">프론트엔드 개발자 에바 입니다.</p>
          <p className="ds-text-secondary">
            이 곳은 제가 공부하고 느낀 것을 기록하는 공간입니다.
          </p>
        </div>

        <div className="ml-auto hidden md:block">
          <Link href="https://friedegg556.tistory.com/" target="_blank">
            <span className="ds-caption ds-text-muted hover-text">
              이전 블로그 방문하기
            </span>
          </Link>
        </div>
      </article>
    </section>
  );
}
