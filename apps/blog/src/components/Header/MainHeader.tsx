import styled from '@emotion/styled';
import { Text, useTheme } from '@nextui-org/react';
import { KBarToggleButton, ThemeSwitch } from 'core';
import { blogName } from 'core/constants';

function MainHeader() {
  const { theme } = useTheme();

  return (
    <Header>
      <H1
        h1
        dangerouslySetInnerHTML={{ __html: blogName }}
        css={{ textGradient: `45deg, ${theme.colors.text.value} -20%, ${theme.colors.primary.value} 70%` }}
      ></H1>
      <ButtonWrapper>
        <ThemeSwitch />
        <KBarToggleButton />
      </ButtonWrapper>
    </Header>
  );
}

export default MainHeader;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.25rem;
`;

const H1 = styled(Text)`
  margin: 0;
  font-size: 6rem;
  line-height: 1;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  gap: 0.5rem;
  display: flex;
`;
