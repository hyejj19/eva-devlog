import { H2 } from './H2';
import { Lalaloop } from './projects/Lalaloop';
import { Obun } from './projects/Obun';

export const Career = () => {
  return (
    <div>
      <H2 subTitle="경력" />
      <div className="flex flex-col space-y-1 pb-2 mb-6 border-b border-gray-100 dark:border-gray-600">
        <h3 className="font-bold text-lg">오이스터에이블</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs ">개발팀/ 프론트앤드 개발자 |</span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            2023.05 ~<span className="text-main-teal"> 재직중</span>
          </span>
        </div>
      </div>

      <section className="flex flex-col gap-10">
        <Lalaloop />
        <Obun />
      </section>
    </div>
  );
};
