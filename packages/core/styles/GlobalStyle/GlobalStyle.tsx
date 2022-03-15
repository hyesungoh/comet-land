import { css, Global } from '@emotion/react';
import { codeHighlight } from './codeHighlight';

const globalStyle = css`
  html {
    font-size: 16px;
    word-break: keep-all;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
  }

  pre {
    font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
      'Courier New', monospace;
  }

  ${codeHighlight};
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
