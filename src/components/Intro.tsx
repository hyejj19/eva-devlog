import Image from 'next/image';

export default function Intro() {
  return (
    <section className="w-full flex items-center mt-32">
      <article className="flex items-end w-full">
        <Image
          src="/profile_develog.png"
          width={120}
          height={120}
          alt="프로필 이미지"
          className="shrink-0 mr-7"
        />
        <div className="max-w-[400px] space-y-2 text-sm md:text-base">
          <p className="font-bold text-xl">안녕하세요!🖐️</p>
          <p>기록으로 성장하는 프론트엔드 개발자 박혜정 입니다.</p>
          <p>공부하고 느낀 것을 블로그에 기록하고 있어요.</p>
        </div>
        <div className="ml-auto hidden md:block">
          <span className="text-xs text-gray-600 hover-text">
            이전 블로그 방문하기
          </span>
        </div>
      </article>
    </section>
  );
}
