import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { blogUrl, favicon } from 'core/constants';

export default class BlogDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:type" content="blog" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:url" content={blogUrl} />
          <meta name="keywords" content="blog,development,developer,frontend,블로그,개발,개발자,프론트엔드" />

          {CssBaseline.flush()}
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
