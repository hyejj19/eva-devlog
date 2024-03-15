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
      </Ul>
    </div>
  );
};
