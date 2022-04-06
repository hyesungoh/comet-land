import styled from '@emotion/styled';
import { Text, useTheme } from '@nextui-org/react';
import { KBarToggleButton, ThemeSwitch } from 'core';
import Link from 'next/link';

import { blogName } from '../../../_config';

function PostHeader() {
  const { theme } = useTheme();

  return (
    <Header>
      <H3 h3 css={{ textGradient: `45deg, ${theme.colors.text.value} -20%, ${theme.colors.primary.value} 70%` }}>
        <Link href="/">
          <a dangerouslySetInnerHTML={{ __html: blogName }}></a>
        </Link>
      </H3>
      <ButtonWrapper>
        <ThemeSwitch />
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
