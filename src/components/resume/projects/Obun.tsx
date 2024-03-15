import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { SubTitle } from '../SubTitle';
import { Bold } from '../Bold';
import { Ul } from '../Ul';

export const Obun = () => {
  return (
    <>
      <SubTitle
        name="오늘의 분리수거"
        team="오이스터에이블"
        startDate="2023.05"
        endDate="진행중"
      />
      <Bold text="Description" />
      <article className="text-sm mb-4 leading-6">
        분리수거 배출 기기인 ‘위빈’과 연동하여 기기 배출시 포인트 적립 및 상품
        구매 등 리워드를 제공하는 플랫폼 서비스 입니다.
        <div className="text-xs text-gray-400 inline-block space-x-2 ml-2">
          <Link
            className="hover-text underline underline-offset-2"
            href="https://play.google.com/store/search?q=%EC%98%A4%EB%8A%98%EC%9D%98%20%EB%B6%84%EB%A6%AC%EC%88%98%EA%B1%B0%EA%B1%B0&c=apps&hl=ko&gl=US"
            target="_blank">
            <span>플레이스토어</span>
          </Link>
          <Link
            className="hover-text underline underline-offset-2"
            href="https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98%EC%9D%98-%EB%B6%84%EB%A6%AC%EC%88%98%EA%B1%B0/id1446402924"
            target="_blank">
            <span>앱스토어</span>
          </Link>
        </div>
      </article>

      <Bold text="Experience" />

      <Ul>
        <li>
          <Markdown>
            CRA → Vite 마이그레이션을 통해 **CI/CD 소요시간 66.58% 단축**으로 DX
            향상
          </Markdown>
        </li>
        <li>
          Vite 번들 설정을 조정하여 Chrome 70까지 호환되는 구버전 디바이스 대응,
          유저 이탈 방지
        </li>
        <li>
          <Markdown>
            클래스 기반의 Cypress 테스트 구조를 활용해 **안정적인 e2e 테스트
            도입 및 적용**
          </Markdown>
        </li>
        <li>
          <Markdown>
            api 호출 로직 도메인 관심사 별 중앙화 및 react-query 를 통한
            캐싱으로 **서버 부하 및 네트워크 트래픽 최적화**
          </Markdown>
        </li>
        <li>
          <Markdown>
            웹소켓 도입으로 기존 평균 180회 호출이 발생하는 REST API 대비 **서버
            부하 절감 및 빠른 피드백으로 UX 개선**
          </Markdown>
        </li>
      </Ul>

      <Bold text="Tech Stack" />
      <Ul>
        <li>React.js, Styled Components, Redux-toolkit, React Query, Vite</li>
      </Ul>
    </>
  );
};
