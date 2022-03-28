import { IHeader, data as headerData } from '../../_content/Header';
import { data as workExperienceData, IWorkExperience } from '../../_content/Work-Experience';
import { data as otherExperienceDate, IOtherExperience } from '../../_content/Other-Experience';

import Header from '../components/Header';
import WorkExperienceSection from '../components/WorkExperienceSection';
import OtherExperienceSection from '../components/OtherExperienceSection';

interface Props {
  header: IHeader;
  workExperience: IWorkExperience;
  otherExperience: IOtherExperience;
}

function Resume({ header, workExperience, otherExperience }: Props) {
  return (
    <main>
      <Header {...header} />
      <WorkExperienceSection {...workExperience} />
      <OtherExperienceSection {...otherExperience} />
    </main>
  );
}

export default Resume;

export async function getStaticProps() {
  return { props: { header: headerData, workExperience: workExperienceData, otherExperience: otherExperienceDate } };
}
