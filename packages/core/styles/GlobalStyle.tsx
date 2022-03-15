import { css, Global } from '@emotion/react';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    word-break: keep-all;
  }
`;

export const GlobalStyleComponent = () => {
  return <Global styles={globalStyle} />;
};
