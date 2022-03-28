import styled from '@emotion/styled';
import { Text, useTheme } from '@nextui-org/react';
import { ThemeSwitch } from 'core';
import { IHeader } from '../../../_content/Header';

function Header({ heading, description }: IHeader) {
  const { theme } = useTheme();

  return (
    <StyledHeader>
      <div>
        <H1 h1 css={{ textGradient: `45deg, ${theme.colors.text.value} 10%, ${theme.colors.primary.value} 60%` }}>
          {heading}
        </H1>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <ThemeSwitch />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;

  & > label:last-of-type {
    margin-top: 8px;
  }
`;

const H1 = styled(Text)`
  font-size: 3rem;
  line-height: 3rem;
`;
