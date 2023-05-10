// TODO: 접속한 페이지에 따라서 태그 보이기 OR 안보이기

export default function PostListItem() {
  return (
    <div className="w-full flex p-2 hover:bg-light-teal hover:transition-colors rounded-md items-center">
      <span className="text-base md:text-lg">
        Next.js 와 Notion API를 활용해 블로그를 만들어 보았습니다.
      </span>
      <span className="hidden text-xs md:block ml-auto text-main-teal">
        2023.04.26
      </span>
    </div>
  );
}
