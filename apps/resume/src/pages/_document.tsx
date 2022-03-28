import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { authorName, favicon } from 'core/constants';

export default class ResumeDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {CssBaseline.flush()}
          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta name="keywords" content="resume,development,developer" />
          {/* for korean keywords */}
          {/* <meta name="keywords" content="resume,development,developer,이력서,개발,개발자" /> */}
          <meta name="twitter:creator" content={authorName} />

          <GlobalStyle />
        </Head>
        <body>
          <Layout>
            <Main />
            <Footer />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}
