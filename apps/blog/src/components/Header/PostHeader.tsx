import Link from 'next/link';
import styled from '@emotion/styled';
import { Text, useTheme } from '@nextui-org/react';
import { KBarToggleButton, ThemeSwitch } from 'core';
import config from '../../../_config/index.json';
const { blogName } = config;

function PostHeader() {
  const { theme, isDark } = useTheme();

  return (
    <Header>
      <H3 h3 css={{ textGradient: `45deg, ${theme.colors.text.value} -20%, ${theme.colors.primary.value} 70%` }}>
        <Link href="/">
          <a dangerouslySetInnerHTML={{ __html: blogName }}></a>
        </Link>
      </H3>
      <ButtonWrapper>
        <ThemeSwitch theme={theme} isDark={isDark} />
        <KBarToggleButton />
      </ButtonWrapper>
    </Header>
  );
}

export default PostHeader;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.25rem;
`;

const H3 = styled(Text)`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  gap: 0.5rem;
  display: flex;
`;
