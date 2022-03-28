import { css, Global } from '@emotion/react';
import { config } from '@nextui-org/react';
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
    transition: background-color 0.4s, color 0.3s;
  }

  ul,
  ol {
    color: inherit;
  }

  ul:not(.contains-task-list) {
    list-style-type: disc;
  }

  ${codeHighlight};

  // this means 650px
  @media ${config.media.xsMax} {
    html {
      font-size: 14px;
    }
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};
