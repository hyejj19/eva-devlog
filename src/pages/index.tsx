import ContentLayout from '../components/ContentLayout';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import TagList from '../components/TagList';

export default function Home() {
  return (
    <Layout>
      <Intro />
      <ContentLayout>
        <TagList />
        <PostList />
      </ContentLayout>
    </Layout>
  );
}
