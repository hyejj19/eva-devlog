import { SubTitle } from '../SubTitle';
import { Bold } from '../Bold';
import { Ul } from '../Ul';

export const WebinKiosk = () => {
  return (
    <>
      <SubTitle
        name="위빈 키오스크 POC"
        team="오이스터에이블"
        startDate="2024.03"
        endDate="진행중"
      />
      <Bold text="Description" />
      <article className="text-sm mb-4 leading-6">
        재활용품 수거 기기 ‘위빈’ 의 차세대 모델로, 키오스크 화면과 AI 를 도입해
        기능 고도화 및 UX 개선을 목표로 하는 신규 키오스크 소프트웨어 개발을
        진행하고 있습니다.
      </article>

      <Bold text="Experience" />
      <Ul>
        <li>
          serial port를 활용한 기기 펌웨어 연동 및 mqtt 프로토콜을 활용한 웹
          서버 통신 구현
        </li>
        <li>
          S3 를 활용한 auto update 기능 구현으로 소프트웨어 유지보수성 증가
        </li>
      </Ul>

      <Bold text="Tech Stack" />
      <Ul>
        <li>Electron.js, React.js</li>
      </Ul>
    </>
  );
};
