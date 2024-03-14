import { H2 } from './H2';
import { Lalaloop } from './projects/Lalaloop';
import { Obun } from './projects/Obun';
import { WebinKiosk } from './projects/WebinKiosk';

export const Projects = () => {
  return (
    <div>
      <H2 subTitle="프로젝트" />
      <div className="space-y-14">
        <div>
          <Obun />
        </div>
        <div>
          <Lalaloop />
        </div>
        <div>
          <WebinKiosk />
        </div>
      </div>
    </div>
  );
};
