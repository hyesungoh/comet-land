import styled from '@emotion/styled';
import { config } from '@nextui-org/react';
import { IWorkExperience } from '../../../_content/Work-Experience';
import Company from './Company';
import Project from './Project';
import Section from '../Section';

function WorkExperienceSection({ title, list }: IWorkExperience) {
  return (
    <Section>
      <h2>{title}</h2>
      {list.map((company, index) => (
        <CompanyWrapper key={index}>
          <div>
            <Company {...company} />
          </div>

          <ProjectWrapper>
            {company.projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </ProjectWrapper>
        </CompanyWrapper>
      ))}
    </Section>
  );
}

export default WorkExperienceSection;

const CompanyWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

  & > div:first-of-type {
    height: auto;
  }

  @media ${config.media.xsMax} {
    flex-direction: column;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
`;
