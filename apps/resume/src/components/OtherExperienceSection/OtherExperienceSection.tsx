import { OtherExperience } from '../../../_content/Other-Experience';
import Section from '../Section';
import Experience from './Experience';

function OtherExperienceSection({ title, list }: OtherExperience) {
  return (
    <Section>
      <h2>{title}</h2>

      {list.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </Section>
  );
}

export default OtherExperienceSection;
