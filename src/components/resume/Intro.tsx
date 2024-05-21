import Link from 'next/link';
import { Ul } from './Ul';

export const Intro = () => {
  return (
    <>
      <div>
        <div className="flex mb-10 items-end">
          <h1 className="text-4xl font-semibold">박혜정</h1>
          <article className="flex space-x-1 text-xs text-main-orange ml-3">
            <Link
              className="hover-text underline underline-offset-2"
              href="https://github.com/hyejj19"
              target="_blank">
              <span>깃허브</span>
            </Link>
            <Link
              className="hover-text underline underline-offset-2"
              href="mailto:hyejj19@naver.com"
              target="_blank">
              <span>이메일</span>
            </Link>
          </article>
        </div>
        <Ul>
          <li className="text-sm">
            Next.js, TypeScript 를 사용한 UI/UX 구현에 능숙한 2년차 프론트엔드
            개발자 입니다.
          </li>
          <li className="text-sm">
            UX/DX 개선에 관심이 많으며,
            <span className="font-bold">
              {` `}비즈니스 가치를 극대화 할 수 있는 방향
            </span>
            을 고민합니다.
          </li>
          <li className="text-sm">
            프로젝트를 주도적으로 관리하며 일정 조율, 문서 작성 및 타 직군과의
            커뮤니케이션을 능숙하게 수행합니다.
          </li>
          <li>
            코드 품질 향상을 위해 PR 템플릿 작성, 커밋/브랜치 관리, 코드 리뷰 및
            테스트 코드를 작성에 익숙합니다.
          </li>
          <li>
            유지보수성/확장성을 고려해 컴포넌트 및 코드 구조를 꼼꼼하게
            설계합니다.
          </li>
        </Ul>
      </div>
    </>
  );
};
