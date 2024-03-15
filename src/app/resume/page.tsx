import ContentLayout from '../../components/post/ContentLayout';
import { Education } from '../../components/resume/\bEducation';
import { Career } from '../../components/resume/Career';
import { Intro } from '../../components/resume/Intro';
import { Projects } from '../../components/resume/Projects';
import { SoftSkills } from '../../components/resume/SoftSkills';
import { Stacks } from '../../components/resume/Stacks';

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
