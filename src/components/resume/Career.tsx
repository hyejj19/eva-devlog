import Markdown from 'markdown-to-jsx';
import { H2 } from './H2';
import { Ul } from './Ul';
import { SubTitle } from './SubTitle';

export const Career = () => {
  return (
    <div>
      <H2 subTitle="경력" />
      <SubTitle
        name="오이스터에이블(Oysterable)"
        team="SW팀 • 프론트엔드 개발자"
        startDate="2023.05.22"
        endDate="재직중"
      />
      <Ul>
        <li>
          AI & IoT 기반 자원 순환 인프라 구축 및 운영을 주력으로 하는 환경
          플랫폼 기업입니다.
        </li>
        <li>
          <Markdown>
            재활용 분야의 참여 보상 앱인 **‘오늘의 분리수거’**의 유지보수/개선
            및 신규 기능 개발을 담당했습니다.
          </Markdown>
        </li>
        <li>
          <Markdown>
            재사용 분야의 인프라 서비스인 **‘랄라루프’**의 모바일 웹/PWA 개발을
            담당했습니다.
          </Markdown>
        </li>
        <li>
          Electron.js 기반의 키오스크 프로그램 개발을 주도하며 재활용 배출 기기
          소프트웨어 신규 개발을 진행하고 있습니다.
        </li>
        <li>
          <Markdown>
            팀원들이 프로젝트 히스토리를 쉽게 파악할 수 있도록 **PR 템플릿 작성
            및 커밋 관리, 프로젝트 문서화에 주력**했습니다.
          </Markdown>
        </li>
        <li>
          <Markdown>
            개발 과정의 효율성과 안정성을 향상시키기 위해 **Cypress를 활용한 e2e
            테스트**를 성공적으로 도입했습니다.
          </Markdown>
        </li>
      </Ul>
    </div>
  );
};
