import { IArticleFile } from '../types/article';
import {
  getAllArticles as getMarkdownArticles,
  getArticleData as getMarkdownArticle,
  getArticlesNames,
  getTagList,
} from './articles-utils';

// All articles come from markdown files (including Notion-synced ones)
export function getAllUnifiedArticles(): IArticleFile[] {
  return getMarkdownArticles();
}

export function getUnifiedArticle(slug: string): IArticleFile | null {
  try {
    const markdownFiles = getArticlesNames();
    const matchingFile = markdownFiles.find(
      (file) => file.replace(/\.md$/, '') === slug,
    );

    if (matchingFile) {
      return getMarkdownArticle(slug);
    }
  } catch {
    // not found
  }

  return null;
}

export function getAllArticleSlugs(): string[] {
  const articles = getAllUnifiedArticles();
  return articles.map((article) => article.slug);
}

export function getUnifiedTagList(): string[] {
  return getTagList();
}
