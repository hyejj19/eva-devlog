import { SubTitle } from '../SubTitle';
import { Bold } from '../Bold';
import { Ul } from '../Ul';

export const Lalaloop = () => {
  return (
    <>
      <SubTitle
        name="랄라루프"
        team="오이스터에이블"
        startDate="2023.10"
        endDate="진행중"
      />
      <Bold text="Description" />
      <article className="text-sm mb-4 leading-6">
        다회용컵 재사용을 위한 무인 대여 및 반납 인프라 서비스로, 다회용 컵
        세척, 회수, 납품 등을 관리하는 물류관리 PWA 앱과 사용자의 반납 기록 관리
        및 보증금 환불 기능을 제공하는 모바일 웹 개발을 담당했습니다.
      </article>

      <Bold text="Experience" />
      <Ul>
        <li>
          재사용 컴포넌트의 독립적인 활용성 증가를 위해 Storybook 도입 및 활용
        </li>
        <li>합성 컴포넌트 구조 도입하여, 재사용성 및 개발 효율성 향상</li>
        <li>물류관리자용 모바일 웹에 PWA 를 도입하여 앱 접근성 및 UX 향상</li>
      </Ul>

      <Bold text="Tech Stack" />
      <Ul>
        <li>Next.js, Styled Components, React Query</li>
      </Ul>
    </>
  );
};
