import React from 'react';
import ContentLayout from '../../src/components/ContentLayout';
import TagList from '../../src/components/TagList';
import PostList from '../../src/components/PostList';

// TODO: Notion API와 연동

const PostsPage = ({ posts }) => {
  console.log(posts);
  return (
    <section className="container">
      <ContentLayout>
        <TagList />
        <PostList />
      </ContentLayout>
    </section>
  );
};

export default PostsPage;
