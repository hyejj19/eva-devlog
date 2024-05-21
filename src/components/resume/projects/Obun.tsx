import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { SubTitle } from '../SubTitle';
import { Ul } from '../Ul';

export const Obun = () => {
  return (
    <section>
      <SubTitle
        name="오늘의 분리수거 유지보수 및 개선"
        startDate="2023.05"
        endDate="2024.03"
      />
      <article className="text-sm mb-4 leading-6 px-5">
        <p>
          IoT 분리수거 배출 기기인 ‘위빈’과 연동하여 기기 배출, 포인트 적립,쇼핑
          등 유저 활동을 지원하는 앱.
        </p>
        <p>누적 가입자 9만 5천여명, MAU 1만 6천,일일 배출량 1만 5천건</p>
        <div className="mt-2">
          <p>- 기술스택: React, Vite, Styled Components, React-query</p>
          <p>- 기여도: 100%</p>
        </div>
      </article>

      <article className="px-5">
        <Ul>
          <li>
            <Markdown>
              CRA → Vite 마이그레이션을 통해 **CI/CD 소요시간 66.58% 단축**으로
              DX 향상
            </Markdown>
          </li>
          <li>
            Vite 번들 설정을 조정하여 Chrome 70까지 호환되는 구버전 디바이스
            대응, 유저 이탈 방지
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
              웹소켓 도입으로 기존 평균 180회 호출이 발생하는 REST API 대비
              **서버 부하 절감 및 빠른 피드백으로 UX 개선**
            </Markdown>
          </li>
        </Ul>

        <div className="text-xs text-main-orange space-x-2">
          <Link
            className="hover-text underline underline-offset-2"
            href="https://play.google.com/store/apps/details?id=kr.co.nuriapp.caso&hl=ko&gl=US"
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
    </section>
  );
};
