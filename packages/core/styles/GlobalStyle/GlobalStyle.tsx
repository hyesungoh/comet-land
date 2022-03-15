import { css, Global } from '@emotion/react';
import { codeHighlight } from './codeHighlight';

const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    word-break: keep-all;
  }

  body {
    margin: 0;
  }

  ${codeHighlight};
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
