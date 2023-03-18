import Link from 'next/link';
import styled from '@emotion/styled';
import { Text, useTheme } from '@nextui-org/react';
import { KBarToggleButton, ThemeSwitch } from 'core';

import { blogName } from '../../../_config';

export function PostHeader() {
  const { theme } = useTheme();

  return (
    <Header>
      <H3 h3 css={{ textGradient: `45deg, ${theme.colors.text.value} -20%, ${theme.colors.primary.value} 70%` }}>
        <Link href="/" dangerouslySetInnerHTML={{ __html: blogName }}></Link>
      </H3>
      <ButtonWrapper>
        <ThemeSwitch />
        <KBarToggleButton />
      </ButtonWrapper>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.25rem;
  word-break: break-word;
`;

const H3 = styled(Text)`
  margin: 0;

  font-size: 2rem;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  height: 100%;
  gap: 0.5rem;
  display: flex;
`;
