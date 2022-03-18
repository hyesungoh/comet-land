import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  max-width: 660px;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 5rem;
`;
