// import { getPosts } from '../../libs/notion';
// import { NextPage } from 'next';
// import Link from 'next/link';

// type NotionPageProps = {
//   posts: any;
// };

// const NotionPage: NextPage<NotionPageProps> = ({ posts }) => {
//   return (
//     <main>
//       {posts.map((post: any, idx: number) => (
//         <Link
//           key={post.id}
//           href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}>
//           <div>
//             {idx}. {post.properties.title.title[0].plain_text}
//           </div>
//         </Link>
//       ))}
//     </main>
//   );
// };

// // 노션 DB에서 Posts 가져오기
// export async function getStaticProps() {
//   const posts = await getPosts();

//   return {
//     props: { posts },
//   };
// }

// export default NotionPage;

import ContentLayout from '../../components/ContentLayout';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import TagList from '../../components/TagList';

export default function PostsPage() {
  return (
    <Layout>
      <section className="mt-16">
        <ContentLayout>
          <TagList />
          <PostList />
        </ContentLayout>
      </section>
    </Layout>
  );
}
