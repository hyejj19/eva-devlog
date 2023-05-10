export default function Intro() {
  return (
    <section className="w-full flex items-center py-20">
      <article className="flex items-end w-full">
        <div className="bg-main-orange w-[120px] h-[120px] shrink-0 mr-5" />
        <div className="max-w-[400px] space-y-2">
          <p className="font-bold text-xl">안녕하세요!🖐️</p>
          <p>기록으로 성장하는 프론트엔드 개발자 박혜정 입니다.</p>
          <p>공부하고 느낀 것을 블로그에 기록하고 있어요.</p>
        </div>
        <div className="ml-auto">Tistory | Github | Notion</div>
      </article>
    </section>
  );
}
