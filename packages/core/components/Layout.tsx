/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div
      css={css`
        max-width: 660px;
        width: 100%;
        margin: 0 auto;
        padding-top: 2rem;
        padding-bottom: 5rem;
      `}
    >
      {children}
    </div>
  );
}
