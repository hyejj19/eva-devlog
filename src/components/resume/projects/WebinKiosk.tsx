import { SubTitle } from '../SubTitle';
import { Bold } from '../Bold';
import { Ul } from '../Ul';

export const WebinKiosk = () => {
  return (
    <>
      <SubTitle
        name="위빈 키오스크 POC"
        team="오이스터에이블"
        startDate="2024.03.01"
        endDate="진행중"
      />
      <Bold text="Description" />
      <article className="text-sm mb-6 leading-6">
        재활용품 수거 기기 ‘위빈’ 의 차세대 모델로, 키오스크와 AI 를 도입하여
        사용성을 개선하는 작업을 진행하고 있습니다.
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
        <li>Electron.js, React.js</li>
      </Ul>
    </>
  );
};
