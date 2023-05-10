export default function PostContent() {
  return (
    <article className="w-full h-full">
      <div className="flex px-2 pb-3 flex-col mb-10 border-b">
        <h1 className="title">
          Next.js와 Notion API를 활용해 블로그를 만들어 보았습니다.
        </h1>
        <div className="flex flex-col w-full text-main-teal items-end space-y-2">
          <span className="text-xs"># React</span>
          <span className="text-xs">2023.04.26</span>
        </div>
      </div>

      <div className="w-full flex flex-col px-2 mb-16">본문 goes here</div>
    </article>
  );
}
