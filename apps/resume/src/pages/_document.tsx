import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { authorImage, authorName, favicon } from 'core/constants';
import { data } from '../../_content/Header';

const TITLE = `${authorName} resume`;
export default class ResumeDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* for NextUI */}
          {CssBaseline.flush()}

          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={data.description} />
          <meta name="keywords" content="resume,development,developer" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={data.description} />
          <meta property="og:image" content={authorImage.default.src} />
          {/* for korean keywords */}
          {/* <meta name="keywords" content="resume,development,developer,이력서,개발,개발자" /> */}
          <meta name="twitter:creator" content={authorName} />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={data.description} />

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
