import Link from 'next/link';
import { H2 } from './H2';
import { SubTitle } from './SubTitle';
import { Ul } from './Ul';

export const Projects = () => {
  return (
    <div>
      <H2 subTitle="프로젝트" />
      <div className="flex flex-col gap-10">
        <section>
          <SubTitle
            name="Evalog - 개인 블로그"
            startDate="2024.03"
            endDate="2024.04"
          />

          <section className="px-5">
            <article className="text-sm mb-4 leading-6 ">
              <div className="mt-2">
                <p>- 기술스택: Next.js (app router), TailwindCSS</p>
                <p>- 기여도: 100%</p>
              </div>
            </article>

            <Ul>
              <li>
                SSG 렌더링을 활용해 페이지 로딩 속도 개선 및 SEO 100점 달성
              </li>
            </Ul>
          </section>

          <div className="text-xs text-main-orange space-x-2 ml-5">
            <Link
              className="hover-text underline underline-offset-2"
              href="https://evalog.vercel.app/"
              target="_blank">
              <span>Evalog</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
