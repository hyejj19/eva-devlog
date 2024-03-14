import Link from 'next/link';
import ContentLayout from '../../components/post/ContentLayout';

export default function Home() {
  return (
    <section className="container">
      <ContentLayout>
        <div className="flex flex-col space-y-10">
          {/* intro */}
          <div>
            <div className="flex mb-6 flex-col space-y-2">
              <h1 className="text-2xl font-semibold">
                프론트엔드 개발자 박혜정{' '}
                <span className="font-normal">입니다.</span>
              </h1>

              <article className="flex space-x-3 text-sm text-gray-400">
                <Link
                  className="hover-text"
                  href="https://github.com/hyejj19"
                  target="_blank">
                  <span>깃허브</span>
                </Link>
                <Link
                  className="hover-text"
                  href="mailto:hyejj19@naver.com"
                  target="_blank">
                  <span>이메일</span>
                </Link>
              </article>
            </div>

            <ul className="space-y-2 list-disc px-4">
              <li className="text-sm">
                비즈니스 목표 달성에 열정을 가지고 있습니다.
              </li>
              <li className="text-sm">
                UX/DX 개선에 관심이 많으며,
                <span className="font-bold text-main-orange">
                  {` `}비즈니스 가치를 극대화 할 수 있는 방향
                </span>
                을 고민합니다.
              </li>
            </ul>
          </div>

          {/* 기술 스택 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">기술 스택</h2>
            <ul className="space-y-2 list-disc px-4">
              <li className="text-sm">
                <span className="font-bold text-main-orange">
                  React.js, TypeScript, Next.js,{` `}
                </span>
                Redux, React Query, Vite
              </li>
              <li className="text-sm">Styled Components, Tailwind CSS</li>
              <li className="text-sm">Cypress, Jest</li>
            </ul>
          </div>
        </div>
      </ContentLayout>
    </section>
  );
}
