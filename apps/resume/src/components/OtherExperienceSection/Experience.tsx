import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';
import { IExperience } from '../../../_content/Other-Experience';
import Li from '../Li';

function Experience({ name, position, startDate, endDate, description, which }: IExperience) {
  const { theme } = useTheme();

  return (
    <Div>
      <h3>{name}</h3>
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
