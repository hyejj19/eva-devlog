import PostListItem from './PostListItem';

export default function PostList() {
  return (
    <article className="w-full h-full">
      <div className="flex justify-between items-baseline px-2">
        <h2 className="subtitle">최근 글</h2>
        <span className="text-main-orange text-sm md:text-base cursor-pointer hover:text-main-teal transition-colors">
          더 보기
        </span>
      </div>
      <div className="flex flex-col space-y-7 mb-16">
        {[1, 2, 3, 4, 5].map((item) => (
          <PostListItem key={item} />
        ))}
      </div>
    </article>
  );
}
