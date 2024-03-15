import Link from 'next/link';
import { SubTitle } from '../SubTitle';
import { Bold } from '../Bold';
import { Ul } from '../Ul';

export const Evalog = () => {
  return (
    <>
      <SubTitle
        name="Evalog."
        team="개인 블로그"
        startDate="2023.04"
        endDate="진행중"
      />
      <Bold text="Description" />
      <article className="text-sm mb-4 leading-6">
        기술 학습 아카이빙을 위한 개인 블로그 프로젝트 입니다.
        <div className="text-xs text-gray-400 inline-block space-x-2 ml-2">
          <Link
            className="hover-text underline underline-offset-2"
            href="https://evalog.vercel.app/"
            target="_blank">
            <span>링크</span>
          </Link>
        </div>
      </article>

      <Bold text="Experience" />
      <Ul>
        <li>
          markdown 과 Markdown-to-JSX 툴을 사용해 데이터의 효율적 관리 및 빠른
          개발/배포
        </li>
        <li>
          서버 컴포넌트를 활용한 SSG 방식의 렌더링을 채택해 빠른 렌더링 속도로
          UX 향상
        </li>
      </Ul>

      <Bold text="Tech Stack" />
      <Ul>
        <li>Next.js, Tailwind CSS</li>
      </Ul>
    </>
  );
};
