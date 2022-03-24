import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GlobalStyle, Layout } from 'core';

export default class ResumeDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <GlobalStyle />
        </Head>
        <body>
          <Layout>
            <Main />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}
