import { H2 } from './H2';
import { SubTitle } from './SubTitle';
import { Ul } from './Ul';

export const ETC = () => {
  return (
    <div>
      <H2 subTitle="기타" />
      <SubTitle
        name="TDD, 클린코드 with JavaScript / NextSTEP"
        startDate="2023.08"
        endDate="2023.10"
      />
      <section className="px-5">
        <Ul>
          <li>객체지향 프로그래밍에 기반한 TDD 학습</li>
        </Ul>
      </section>
    </div>
  );
};
