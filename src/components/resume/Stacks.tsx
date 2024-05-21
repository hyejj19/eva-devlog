import { H2 } from './H2';
import { Ul } from './Ul';

export const Stacks = () => {
  return (
    <div>
      <H2 subTitle="기술 스택" />
      <Ul>
        <li>
          <span className="font-bold">React.js, TypeScript, Next.js,{` `}</span>
          Redux, React Query, Vite
        </li>
        <li>Styled Components, Tailwind CSS</li>
        <li>Cypress, Jest</li>
      </Ul>
    </div>
  );
};
