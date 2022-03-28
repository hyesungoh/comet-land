import styled from '@emotion/styled';
import { IWorkExperience } from '../../../_content/Work-Experience';
import Company from './Company';
import Project from './Project';

function WorkExperienceSection({ title, list }: IWorkExperience) {
  return (
    <section>
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
    </section>
  );
}

export default WorkExperienceSection;

const CompanyWrapper = styled.div`
  display: flex;
  margin-top: 1.5rem;

  & > div:first-of-type {
    height: auto;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
`;
