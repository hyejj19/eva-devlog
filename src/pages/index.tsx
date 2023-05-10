import ContentLayout from '../components/ContentLayout';
import Intro from '../components/Intro';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Intro />
      <ContentLayout />
    </Layout>
  );
}
