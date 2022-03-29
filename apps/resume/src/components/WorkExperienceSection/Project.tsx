import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';
import { IProject } from '../../../_content/Work-Experience';
import Li from '../Li';

function Project({ title, description, startDate, endDate, which, techStack }: IProject) {
  const { theme } = useTheme();

  return (
    <Div>
      <h3>{title}</h3>
      <small>
        {startDate} ~ {endDate}
      </small>
      <span>{description}</span>
      {which.length > 0 && (
        <ul>
          {which.map((each, index) => (
            <Li key={index} theme={theme}>
              {each}
            </Li>
          ))}
        </ul>
      )}

      {techStack.length > 0 && (
        <TechDiv>
          {techStack.map((tech, index) => (
            <TechSpan key={index} theme={theme}>
              {tech}
            </TechSpan>
          ))}
        </TechDiv>
      )}
    </Div>
  );
}

export default Project;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

const TechDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechSpan = styled.span<{ theme: NextUITheme | undefined }>`
  padding: 0.125rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.accents1.value};
  border-radius: 32px;
  font-size: 0.75rem;
`;
