import styled from '@emotion/styled';
import { config, NextUITheme, useTheme } from '@nextui-org/react';

import { Company } from '../../../_content/Work-Experience';

function Company({ name, position, startDate, endDate, description }: Omit<Company, 'projects'>) {
  const { theme } = useTheme();

  return (
    <CompanyCard data-testid="wrapper">
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
  width: 14.375rem;

  @media ${config.media.xsMax} {
    width: 100%;
    padding-right: 0;
    margin-bottom: 1rem;
  }
`;

const P = styled.p<{ theme: NextUITheme | undefined }>`
  color: ${({ theme }) => theme.colors.accents6.value};
`;
