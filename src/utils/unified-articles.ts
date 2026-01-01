import { IArticleFile } from '../types/article';
import {
  getAllArticles as getMarkdownArticles,
  getArticleData as getMarkdownArticle,
  getArticlesNames,
} from './articles-utils';
import {
  getAllNotionArticles,
  getNotionArticleBySlug,
} from '../lib/notion/database';

// 마크다운 글에 source 추가
function addMarkdownSource(articles: IArticleFile[]): IArticleFile[] {
  return articles.map((article) => ({
    ...article,
    source: 'markdown' as const,
  }));
}

// 모든 글 통합 (마크다운 + Notion)
export async function getAllUnifiedArticles(): Promise<IArticleFile[]> {
  // 마크다운 글 (동기)
  const markdownArticles = addMarkdownSource(getMarkdownArticles());

  // Notion 글 (비동기)
  let notionArticles: IArticleFile[] = [];
  try {
    notionArticles = await getAllNotionArticles();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch Notion articles:', error);
    // Notion 실패해도 마크다운 글은 표시
  }

  // 통합 후 날짜순 정렬
  const allArticles = [...markdownArticles, ...notionArticles];
  return allArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

// 단일 글 가져오기 (slug 기반)
export async function getUnifiedArticle(
  slug: string,
): Promise<IArticleFile | null> {
  // 1. 먼저 마크다운에서 찾기
  try {
    const markdownFiles = getArticlesNames();
    const matchingFile = markdownFiles.find(
      (file) => file.replace(/\.md$/, '') === slug,
    );

    if (matchingFile) {
      const markdownArticle = getMarkdownArticle(slug);
      return { ...markdownArticle, source: 'markdown' as const };
    }
  } catch (error) {
    // 마크다운에서 못 찾으면 Notion에서 찾기
  }

  // 2. Notion에서 찾기
  try {
    const notionArticle = await getNotionArticleBySlug(slug);
    if (notionArticle) {
      return notionArticle;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch from Notion:', error);
  }

  return null;
}

// 모든 slug 목록 (generateStaticParams용)
export async function getAllArticleSlugs(): Promise<string[]> {
  const articles = await getAllUnifiedArticles();
  return articles.map((article) => article.slug);
}

// 통합 태그 목록
export async function getUnifiedTagList(): Promise<string[]> {
  const articles = await getAllUnifiedArticles();
  const tags = articles.map((article) => article.tag).filter(Boolean);
  return [...new Set(tags)]; // 중복 제거
}
