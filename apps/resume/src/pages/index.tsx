import { IHeader, data as headerData } from '../../_content/Header';
import { data as workExperienceData, IWorkExperience } from '../../_content/Work-Experience';
import { data as otherExperienceDate, IOtherExperience } from '../../_content/Other-Experience';
import { data as skillsData, ISkills } from '../../_content/Skills';

import Header from '../components/Header';
import WorkExperienceSection from '../components/WorkExperienceSection';
import OtherExperienceSection from '../components/OtherExperienceSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';

interface Props {
  header: IHeader;
  workExperience: IWorkExperience;
  otherExperience: IOtherExperience;
  skills: ISkills;
}

function Resume({ header, workExperience, otherExperience, skills }: Props) {
  return (
    <main>
      <Header {...header} />
      <WorkExperienceSection {...workExperience} />
      <OtherExperienceSection {...otherExperience} />
      <SkillsSection {...skills} />
    </main>
  );
}

export default Resume;

export async function getStaticProps() {
  return {
    props: {
      header: headerData,
      workExperience: workExperienceData,
      otherExperience: otherExperienceDate,
      skills: skillsData,
    },
  };
}
