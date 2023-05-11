// import { getPost, getPostContent, getPosts } from '../../libs/notion';
// import { GetStaticPropsContext, NextPage } from 'next';

import React from 'react';
import ContentLayout from '../../../src/components/ContentLayout';
import TableOfContents from '../../../src/components/TableOfContents';
import PostContent from '../../../src/components/PostContent';
// import ContentLayout from '../../components/ContentLayout';
// import Layout from '../../components/Layout';
// import PostContent from '../../components/PostContent';
// import TableOfContents from '../../components/TableOfContents';

// type NotionPageProps = {
//   postId: any;
//   postData: any;
//   postContent: any;
// };

// const NotionPage: NextPage<NotionPageProps> = ({
//   postId,
//   postData,
//   postContent,
// }) => {
//   console.log(postData, postContent);
//   return (
//     <main>
//       {/* {postContent.map((content: any) => (
//         <div key={content.id}>
//           {content.type} : {content.paragraph.rich_text[0].plain_text}
//         </div>
//       ))} */}
//     </main>
//   );
// };

// // slug 로 url 동적으로 생성
// export async function getStaticPaths() {
//   const posts = await getPosts();
//   const postSlugs = posts.map((post) => {
//     if (post && 'properties' in post && 'rich_text' in post.properties.slug) {
//       return `/blog/${post.properties.slug.rich_text[0].plain_text}`;
//     }
//   });

//   return {
//     paths: postSlugs,
//     fallback: 'blocking',
//   };
// }

// // 페이지 콘텐츠 가져오기
// export async function getStaticProps(context: GetStaticPropsContext) {
//   const slug = context.params && context.params.slug;
//   const posts = await getPosts();
//   const matchedPost = posts.filter((post) => {
//     if (post && 'properties' in post && 'rich_text' in post.properties.slug) {
//       return post.properties.slug.rich_text?.[0].plain_text === slug;
//     }
//   })[0];

//   const [postData, postContent] = await Promise.all([
//     getPost(matchedPost.id),
//     getPostContent(matchedPost.id),
//   ]);

//   return {
//     props: {
//       postId: matchedPost.id,
//       postData,
//       postContent,
//     },
//     revalidate: 60,
//   };
// }

// export default NotionPage;

export default function PostPage() {
  return (
    <section className="mt-16 w-full">
      <ContentLayout>
        <TableOfContents />
        <PostContent />
      </ContentLayout>
    </section>
  );
}
