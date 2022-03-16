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
    transition: background-color 0.4s, color 0.3s;
  }

  body {
    margin: 0;
    transition: background-color 0.4s, color 0.3s;
  }

  ${codeHighlight};
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
