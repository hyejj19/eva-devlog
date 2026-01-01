export interface IArticleFile {
  slug: string;
  title: string;
  date: string;
  updatedDate: string;
  image: string;
  excerpt: string;
  tag: string;
  content: string;
  // 콘텐츠 소스 구분
  source?: 'markdown' | 'notion';
  // Notion 페이지 ID (Notion 소스인 경우)
  notionPageId?: string;
}
