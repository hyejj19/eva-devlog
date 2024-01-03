/* eslint-disable react/no-unstable-nested-components */
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';
import { useEffect } from 'react';
import { IArticleFile } from '../../../types/article';

interface ArticleProps {
  articleData: IArticleFile;
}

const Article = ({ articleData }: ArticleProps) => {
  const { title, content, date, tag } = articleData;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <section className="flex flex-col w-full">
      <article className="flex w-full pb-3 flex-col mb-10 border-b">
        <h1 className="title">{title}</h1>
        <div className="flex flex-col w-full items-end space-y-2 mt-2 small-text">
          <span className="text-xs"># {tag}</span>
          <span className="text-xs">{date}</span>
        </div>
      </article>

      <article className="prose dark:prose-invert prose-code:text-sm">
        <Markdown>{content}</Markdown>
      </article>
    </section>
  );
};

export default Article;
