import styled from '@emotion/styled';
import { config, NextUITheme, useTheme } from '@nextui-org/react';

import { WorkExperience } from '../../../_content/Work-Experience';
import Section from '../Section';
import Company from './Company';
import Project from './Project';

function WorkExperienceSection({ title, list }: WorkExperience) {
  const { theme } = useTheme();

  return (
    <Section>
      <h2>{title}</h2>
      {list.map((company, index) => (
        <CompanyWrapper key={index}>
          <div>
            <Company {...company} />
          </div>

          <ProjectWrapper theme={theme}>
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
  margin-bottom: 3rem;

  & > div:first-of-type {
    height: auto;
  }

  @media ${config.media.xsMax} {
    flex-direction: column;
  }
`;

const ProjectWrapper = styled.div<{ theme: NextUITheme | undefined }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;

  @media ${config.media.xsMax} {
    padding-left: 1rem;
    border-left: solid 3px ${({ theme }) => theme.colors.primary.value};
  }
`;
