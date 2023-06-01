import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import { Experience } from '../../../_content/Other-Experience';
import Li from '../Li';
import TitleTooltip from '../TitleTooltip';

function Experience({ title, position, startDate, endDate, description, which }: Experience) {
  const { theme } = useTheme();

  return (
    <Div>
      <TitleTooltip {...title} />
      <small>
        {startDate} ~ {endDate}
      </small>
      <span>{position}</span>
      <p>{description}</p>
      {which.length > 0 && (
        <ul>
          {which.map((each, index) => (
            <Li key={index} theme={theme}>
              {each}
            </Li>
          ))}
        </ul>
      )}
    </Div>
  );
}

export default Experience;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
