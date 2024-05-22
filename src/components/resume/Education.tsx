import { H2 } from './H2';
import { SubTitle } from './SubTitle';
import { Ul } from './Ul';

export const Education = () => {
  return (
    <div>
      <H2 subTitle="학력" />
      <SubTitle name="동양미래대학교" startDate="2017" endDate="2021" />
      <section className="px-5">
        <Ul>
          <li>실내환경디자인학 학사 (4.22/4.5)</li>
        </Ul>
      </section>
    </div>
  );
};
