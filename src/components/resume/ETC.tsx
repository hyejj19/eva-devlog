import { H2 } from './H2';
import { SubTitle } from './SubTitle';
import { Ul } from './Ul';

export const ETC = () => {
  return (
    <div>
      <H2 subTitle="기타" />
      <section>
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
      </section>

      <section className="pt-4">
        <SubTitle
          name="주식회사 준디자인"
          startDate="2020.05"
          endDate="2022.05"
        />
        <section className="px-5">
          <Ul>
            <li>인테리어 디자이너로 재직하며 공간 디자인/설계 담당</li>
          </Ul>
        </section>
      </section>
    </div>
  );
};
