// TODO: 본문 컨텐츠와 연동되도록 구현
'use client';

export default function TableOfContents() {
  return (
    <article className="w-[280px] h-full hidden md:block">
      <h2 className="subtitle">Contents</h2>
      <ul className="space-y-2 text-sm pt-2">
        <li className="hover-text">왜 블로그를 만들었나</li>
        <li className="hover-text">소제목 1</li>
        <li className="hover-text">소제목 2</li>
        <li className="hover-text">결론</li>
      </ul>
    </article>
  );
}
