/* eslint-disable react/no-unstable-nested-components */
import Markdown from 'markdown-to-jsx';
import { IArticleFile } from '../types/article';

interface ArticleProps {
  articleData: IArticleFile;
}

const Article = ({ articleData }: ArticleProps) => {
  const { title, content, date, tag } = articleData;
  return (
    <section className="flex flex-col w-full">
      <article className="flex w-full px-2 pb-3 flex-col mb-10 border-b">
        <h1 className="title">{title}</h1>
        <div className="flex flex-col w-full items-end space-y-2 mt-2 small-text">
          <span className="text-xs"># {tag}</span>
          <span className="text-xs">{date}</span>
        </div>
      </article>

      <article>
        <Markdown>{content}</Markdown>
      </article>
    </section>
  );
};

export default Article;
