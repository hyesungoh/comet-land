import { IHeader, data as headerData } from '../../_content/Header';
import { data as workExperienceData, IWorkExperience } from '../../_content/Work-Experience';

import Header from '../components/Header';
import WorkExperienceSection from '../components/WorkExperienceSection';

interface Props {
  header: IHeader;
  workExperience: IWorkExperience;
}

function Resume({ header, workExperience }: Props) {
  return (
    <main>
      <Header {...header} />
      <WorkExperienceSection {...workExperience} />
    </main>
  );
}

export default Resume;

export async function getStaticProps() {
  return { props: { header: headerData, workExperience: workExperienceData } };
}
