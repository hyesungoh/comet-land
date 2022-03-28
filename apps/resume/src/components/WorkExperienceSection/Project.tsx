import styled from '@emotion/styled';
import { IProject } from '../../../_content/Work-Experience';

function Project({ title, description, startDate, endDate, which, techStack }: IProject) {
  return (
    <Div>
      <h3>{title}</h3>
      <span>
        {startDate} ~ {endDate}
      </span>
      <span>{description}</span>
      {which.length > 0 && (
        <ul>
          {which.map((each, index) => (
            <li key={index}>{each}</li>
          ))}
        </ul>
      )}
      <span>{techStack}</span>
    </Div>
  );
}

export default Project;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
