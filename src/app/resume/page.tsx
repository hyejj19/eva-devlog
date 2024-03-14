import ContentLayout from '../../components/post/ContentLayout';
import { Career } from '../../components/resume/Career';
import { Intro } from '../../components/resume/Intro';
import { Projects } from '../../components/resume/Projects';
import { Stacks } from '../../components/resume/Stacks';

export default function Resume() {
  return (
    <section className="container">
      <ContentLayout>
        <div className="flex flex-col space-y-16">
          <Intro />
          <Stacks />
          <Career />
          <Projects />
        </div>
      </ContentLayout>
    </section>
  );
}
