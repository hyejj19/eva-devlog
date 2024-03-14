import { SubTitle } from '../SubTitle';
import { Bold } from '../Bold';
import { Ul } from '../Ul';

export const Lalaloop = () => {
  return (
    <>
      <SubTitle
        name="랄라루프"
        team="오이스터에이블"
        startDate="2023.10.22"
        endDate="진행중"
      />
      <Bold text="Description" />
      <article className="text-sm mb-6 leading-6">
        다회용컵 재사용을 위한 무인 대여 및 반납 인프라 서비스로, 다회용 컵
        세척, 회수, 납품 등을 관리하는 물류관리 PWA 앱과 사용자의 반납 기록 관리
        및 보증금 환불 기능을 제공하는 모바일 웹 개발을 담당했습니다.
      </article>

      <Bold text="Experience" />
      <Ul>
        <li>
          AI & IoT 기반 자원 순환 인프라 구축 및 운영을 주력으로 하는 환경
          플랫폼 기업입니다.
        </li>
      </Ul>

      <Bold text="Tech Stack" />
      <Ul>
        <li>Next.js, Styled Components, React Query</li>
      </Ul>
    </>
  );
};
