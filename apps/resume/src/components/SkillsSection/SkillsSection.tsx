import { ISkills } from '../../../_content/Skills';
import Section from '../Section';
import Skill from './Skill';

function SkillsSection({ title, list }: ISkills) {
  return (
    <Section>
      <h2>{title}</h2>
      {list.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </Section>
  );
}

export default SkillsSection;
