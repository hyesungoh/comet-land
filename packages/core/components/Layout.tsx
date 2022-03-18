import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  position: relative;
  max-width: 660px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 100px; // for footer
`;
