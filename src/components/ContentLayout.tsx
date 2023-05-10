import PostList from './PostList';
import TagList from './TagList';

export default function ContentLayout() {
  return (
    <section className="flex w-full h-full justify-between">
      <TagList />
      <PostList />
    </section>
  );
}
