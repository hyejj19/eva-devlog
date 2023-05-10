import ContentLayout from '../../components/ContentLayout';
import Layout from '../../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="container">
        <ContentLayout>
          <span>resume</span>
        </ContentLayout>
      </section>
    </Layout>
  );
}
