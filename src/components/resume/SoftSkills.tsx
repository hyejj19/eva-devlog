import Markdown from 'markdown-to-jsx';
import { H2 } from './H2';
import { Ul } from './Ul';

export const SoftSkills = () => {
  return (
    <>
      <H2 subTitle="강점" />
      <Ul>
        <li>
          <Markdown>
            프로젝트 히스토리를 쉽게 파악할 수 있도록 **PR 템플릿 작성 및 커밋
            관리, 프로젝트 문서화**에 주력합니다.
          </Markdown>
        </li>
        <li>
          <Markdown>
            기능 배포시 영향도를 최소화 할 수 있도록, **커밋 / 브랜치 관리**에
            신경씁니다.
          </Markdown>
        </li>
        <li>
          <Markdown>
            코드 품질 향상을 위해 **코드 리뷰 및 테스트 코드 작성**에 시간을
            투자합니다.
          </Markdown>
        </li>
        <li>
          <Markdown>
            전반적인 비즈니스 플로우에 대한 이해도가 있어야 개발을 잘 할 수
            있다는 생각으로, 타 부서와 **긴밀한 커뮤니케이션**을 중요시합니다.
          </Markdown>
        </li>
      </Ul>
    </>
  );
};
