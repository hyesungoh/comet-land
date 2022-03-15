import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GlobalStyle } from 'core';

export default class BlogDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
