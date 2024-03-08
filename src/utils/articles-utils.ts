import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IArticleFile } from '../types/article';

const postsDirectory = path.join(process.cwd(), 'public/articles');

export const getArticlesNames = () => {
  return fs.readdirSync(postsDirectory);
};

export function getArticleData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, '');

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as IArticleFile;

  return postData;
}

export function getAllArticles() {
  const postFiles = getArticlesNames();

  const allPosts = postFiles.map((postFile) => {
    return getArticleData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA?.date > postB?.date ? -1 : 1,
  );

  return sortedPosts;
}

export function getTagList() {
  return getAllArticles().map((article) => article.tag);
}
