import styled from '@emotion/styled';
import { NextUITheme, useTheme } from '@nextui-org/react';
import { ICompany } from '../../../_content/Work-Experience';

function Company({ name, position, startDate, endDate, description }: Omit<ICompany, 'projects'>) {
  const { theme } = useTheme();

  return (
    <CompanyCard>
      <h3>{name}</h3>
      <small>
        {startDate} ~ {endDate}
      </small>
      <span>{position}</span>
      <P theme={theme}>{description}</P>
    </CompanyCard>
  );
}

export default Company;

const CompanyCard = styled.div`
  position: sticky;
  top: 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  width: 260px;
`;

const P = styled.p<{ theme: NextUITheme | undefined }>`
  color: ${({ theme }) => theme.colors.accents6.value};
`;
