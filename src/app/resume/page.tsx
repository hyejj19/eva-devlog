import { Metadata } from 'next';
import ContentLayout from '../../components/post/ContentLayout';
import { Education } from '../../components/resume/\bEducation';
import { Career } from '../../components/resume/Career';
import { Intro } from '../../components/resume/Intro';
import { Projects } from '../../components/resume/Projects';
import { SoftSkills } from '../../components/resume/SoftSkills';
import { Stacks } from '../../components/resume/Stacks';

export const metadata: Metadata = {
  title: '박혜정 이력서',
  description: '프론트엔드 개발자 박혜정 입니다.',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: {
    name: 'eva',
    url: 'https://github.com/hyejj19',
  },
  openGraph: {
    title: '박혜정 이력서.',
    siteName: 'Eva박혜정 이력서log.',
    type: 'website',
    url: 'https://evalog.vercel.app/resume',
    images: '/profile_devlog.webp',
  },
  twitter: {
    title: '박혜정 이력서.',
    card: 'summary',
    description: '프론트엔드 개발자 박혜정 입니다.',
    images: '/profile_devlog.webp',
    creator: 'eva',
  },
};

export default function Resume() {
  return (
    <section className="container">
      <ContentLayout>
        <div className="flex flex-col space-y-7">
          <Intro />
          <Stacks />
          <Career />
          <Projects />
          <SoftSkills />
          <Education />
        </div>
      </ContentLayout>
    </section>
  );
}
