import { PostListSkeleton } from '../../components/common/Skeleton';

export default function PostsLoading() {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row w-full h-full justify-between pt-20 md:space-x-5">
        {/* TagList Skeleton - Desktop only */}
        <article className="w-[280px] h-full hidden md:block">
          <div className="skeleton h-8 w-20 mb-8" />
          <div className="space-y-3 pt-2">
            {['tag-1', 'tag-2', 'tag-3', 'tag-4', 'tag-5', 'tag-6'].map(
              (id) => (
                <div key={id} className="skeleton h-4 w-32" />
              ),
            )}
          </div>
        </article>

        {/* PostList Skeleton */}
        <article className="w-full h-full">
          <div className="flex justify-between items-baseline px-2 mb-4">
            <div className="skeleton h-8 w-24" />
          </div>
          <PostListSkeleton />
        </article>
      </div>
    </section>
  );
}
