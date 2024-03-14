import Link from 'next/link';
import { SubTitle } from '../SubTitle';
import { Bold } from '../Bold';
import { Ul } from '../Ul';

export const Obun = () => {
  return (
    <>
      <SubTitle
        name="오늘의 분리수거"
        team="오이스터에이블"
        startDate="2023.05.22"
        endDate="진행중"
      />
      <Bold text="Description" />
      <article className="text-sm mb-6 leading-6">
        분리수거 배출 기기인 ‘위빈’과 연동하여 기기 배출시 포인트 적립 및 상품
        구매 등 리워드를 제공하는 플랫폼으로, 누적 가입자수 86,000명, MAU
        16,000명 규모의 웹앱입니다.
        <div className="text-sm text-gray-400 inline-block space-x-2 ml-2">
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
          AI & IoT 기반 자원 순환 인프라 구축 및 운영을 주력으로 하는 환경
          플랫폼 기업입니다.
        </li>
      </Ul>

      <Bold text="Tech Stack" />
      <Ul>
        <li>React.js, Styled Components, Redux-toolkit, React Query, Vite</li>
      </Ul>
    </>
  );
};
