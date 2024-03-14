import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IArticleFile } from '../types/article';

export const postsDirectory = path.join(process.cwd(), 'public/articles');
export const resumeDirectory = path.join(process.cwd(), 'public/resume');

export const getArticlesNames = (directoryPath = postsDirectory) => {
  return fs.readdirSync(directoryPath);
};

export function getArticleData(
  postIdentifier: string,
  directoryPath = postsDirectory,
) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(directoryPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as IArticleFile;

  return postData;
}

export function getAllArticles(directoryPath = postsDirectory) {
  const postFiles = getArticlesNames(directoryPath);

  const allPosts = postFiles.map((postFile) => {
    return getArticleData(postFile, directoryPath);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA?.date > postB?.date ? -1 : 1,
  );

  return sortedPosts;
}

export function getTagList(directoryPath = postsDirectory) {
  return getAllArticles(directoryPath).map((article) => article.tag);
}

export function getResume(directoryPath = resumeDirectory) {
  const postFiles = getArticlesNames(directoryPath);

  const allPosts = postFiles.map((postFile) => {
    return getArticleData(postFile, directoryPath);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA?.date > postB?.date ? 1 : -1,
  );

  return sortedPosts[0];
}
