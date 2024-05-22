import { Metadata } from 'next';
import ContentLayout from '../../components/post/ContentLayout';
import { Education } from '../../components/resume/Education';
import { Career } from '../../components/resume/Career';
import { Intro } from '../../components/resume/Intro';
import { Projects } from '../../components/resume/Projects';
import { SoftSkills } from '../../components/resume/SoftSkills';
import { Stacks } from '../../components/resume/Stacks';
import { ScrollToTopButton } from '../../components/common/ScrollToTopButton';
import { ETC } from '../../components/resume/ETC';

export const metadata: Metadata = {
  title: '박혜정 이력서',
  description: '프론트엔드 개발자 박혜정 입니다.',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: {
    name: 'eva',
    url: 'https://github.com/hyejj19',
  },
  openGraph: {
    title: '박혜정 이력서',
    siteName: '박혜정 이력서',
    type: 'website',
    url: 'https://evalog.vercel.app/resume',
    description: '프론트엔드 개발자 박혜정 입니다.',
    images:
      'https://private-user-images.githubusercontent.com/89173923/313081213-8348bd8e-006a-41ed-be6f-68ce94ce7592.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA0ODE5NDQsIm5iZiI6MTcxMDQ4MTY0NCwicGF0aCI6Ii84OTE3MzkyMy8zMTMwODEyMTMtODM0OGJkOGUtMDA2YS00MWVkLWJlNmYtNjhjZTk0Y2U3NTkyLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxNVQwNTQ3MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWFiYjI2ZjBhZTA5MDg3NDIxMGNlODc4MmFkNTkxZWMxMDY1YjgwOTAzYWJlZDc0ODlmYzY1YTYxYWUwODZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.O9iNjMNJk4LQulVsB8xw8lqAp0xw79uIBdx4MbYx_N8',
  },
  twitter: {
    title: '박혜정 이력서',
    card: 'summary',
    description: '프론트엔드 개발자 박혜정 입니다.',
    images:
      'https://private-user-images.githubusercontent.com/89173923/313081213-8348bd8e-006a-41ed-be6f-68ce94ce7592.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA0ODE5NDQsIm5iZiI6MTcxMDQ4MTY0NCwicGF0aCI6Ii84OTE3MzkyMy8zMTMwODEyMTMtODM0OGJkOGUtMDA2YS00MWVkLWJlNmYtNjhjZTk0Y2U3NTkyLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxNVQwNTQ3MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWFiYjI2ZjBhZTA5MDg3NDIxMGNlODc4MmFkNTkxZWMxMDY1YjgwOTAzYWJlZDc0ODlmYzY1YTYxYWUwODZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.O9iNjMNJk4LQulVsB8xw8lqAp0xw79uIBdx4MbYx_N8',
    creator: 'eva',
  },
};

export default function Resume() {
  return (
    <section className="container">
      <ContentLayout>
        <div className="flex flex-col space-y-10">
          <Intro />
          <Stacks />
          <Career />
          <Projects />
          <Education />
          <ETC />
        </div>
      </ContentLayout>
      <ScrollToTopButton />
    </section>
  );
}
