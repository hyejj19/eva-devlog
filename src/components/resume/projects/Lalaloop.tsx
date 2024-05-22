import Link from 'next/link';
import { SubTitle } from '../SubTitle';
import { Ul } from '../Ul';

export const Lalaloop = () => {
  return (
    <>
      <section>
        <SubTitle
          name="랄라루프 컵(다회용컵 순환 서비스) 모바일 웹 개발 및 유지보수"
          startDate="2023.08"
          endDate="2024.05"
        />

        <section className="px-5">
          <article className="text-sm mb-4 leading-6 ">
            다회용컵 재사용을 위한 무인 대여 및 반납 인프라 서비스로, 사용자의
            반납 기록 관리 및 보증금 환불, 반납/대여기 찾기 서비스를 제공
            <div className="mt-2">
              <p>
                - 기술스택: Next.js (pages router), Styled Components, React
                Query, MSW
              </p>
              <p>- 기여도: 100%</p>
            </div>
          </article>

          <Ul>
            <li>API routes를 활용한 카카오 CI 인증 구현</li>
            <li>
              아토믹 패턴과 합성 컴포넌트 등 디자인 패턴 활용 및 스토리북을
              활용한 CDD 방식 도입하여 독립적인 컴포넌트 개발
            </li>
            <li>
              회원가입 페이지의 multi-step form을 개발하고, 상태 관리와
              애니메이션을 적용해 UX 개선
            </li>
            <li>
              영문/한글에 대한 i18n 적용 및 효율적인 적용을 위한 훅/테스트코드
              작성
            </li>
            <li>
              기존 HTML로 하드코딩된 서비스 약관을 Markdown 형식으로 관리하고,
              API routes를 통해 동적 응답하도록 리팩토링하여 유지보수성/가독성
              개선
            </li>
          </Ul>
        </section>

        <div className="text-xs text-main-orange space-x-2 ml-5">
          <Link
            className="hover-text underline underline-offset-2"
            href="https://cup.lalaloop.app/"
            target="_blank">
            <span>랄라루프 다회용컵 홈페이지</span>
          </Link>
        </div>
      </section>

      <section>
        <SubTitle
          name="랄라루프 컵 물류기사용 PWA Web App 개발"
          startDate="2023.10"
          endDate="2023.12"
        />
        <section className="px-5">
          <article className="text-sm mb-4 leading-6 ">
            다회용컵 물류 배송 관리를 위한 PWA 모바일 웹
            <div className="mt-2">
              <p>
                - 기술스택: Next.js (pages router), Styled Components, next-pwa,
                zustand
              </p>
              <p>- 기여도: 100%</p>
            </div>
          </article>

          <Ul>
            <li>
              웹페이지에 매번 접속하지 않고도 모바일 홈 화면에서 바로 접근할 수
              있도록 Progressive Web App (PWA)를 적용하여 UX 개선
            </li>
            <li>
              효율적인 에러 핸들링을 위해 Custom Error Boundary를 도입하고,
              상황에 맞는 에러를 throw하여 일관된 에러 처리 구현
            </li>
            <li>
              비슷한 테마의 다양한 디자인 변형을 적용할 수 있도록 리스트
              컴포넌트에 합성 컴포넌트 패턴 적용, 중복 코드 및 가독성 개선
            </li>
            <li>
              캘린더, QR 스캐너 등 외부 라이브러리 도입 및 UX에 맞도록
              커스터마이징
            </li>
          </Ul>
        </section>
      </section>
    </>
  );
};
