import styled from '@emotion/styled';
import { Text, Link } from '@nextui-org/react';
import NextLink from 'next/link';

export function NotFound() {
  return (
    <Main>
      <Text h1 size={'4rem'} css={{ borderRight: 'solid $black 4px', padding: '0 32px' }} weight="bold">
        404
      </Text>
      <Div>
        <p>This page could not be found.</p>
        <NextLink href="/" passHref>
          <Link>Go to main</Link>
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
