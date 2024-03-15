import { H2 } from './H2';
import { SubTitle } from './SubTitle';
import { Ul } from './Ul';

export const Education = () => {
  return (
    <div>
      <H2 subTitle="학력" />
      <SubTitle
        name="동양미래대학교"
        team="실내환경디자인과"
        startDate="2017"
        endDate="2021 (학사)"
      />
      <Ul>
        <li>학과 차석 졸업 (총점 4.22)</li>
      </Ul>
    </div>
  );
};
