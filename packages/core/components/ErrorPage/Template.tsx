import styled from '@emotion/styled';
import { Link, NextUITheme, useTheme } from '@nextui-org/react';
import NextLink from 'next/link';

interface Props {
  errorTitle: string;
  paragraph: string;
  anchorMessage: string;
}

export function ErrorTemplate({ errorTitle, paragraph, anchorMessage }: Props) {
  const { theme } = useTheme();

  return (
    <Main>
      <H1 theme={theme}>{errorTitle}</H1>
      <Div>
        <p>{paragraph}</p>
        <NextLink href="/" passHref>
          <Link>{anchorMessage}</Link>
        </NextLink>
      </Div>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  padding-left: 32px;
`;

const H1 = styled.h1<{ theme: NextUITheme | undefined }>`
  font-size: 4rem;
  border-right: solid ${({ theme }) => theme.colors.black.value} 4px;
  padding: 0 32px;
  margin: 0;
`;
