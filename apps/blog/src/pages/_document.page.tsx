import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { authorName, blogGAID, blogHotjarID, favicon } from 'core/constants';

function isValid(value: any) {
  if (typeof value === 'string' && value.length > 0) return true;
  return false;
}

export default class BlogDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* for NextUI */}
          {CssBaseline.flush()}

          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:type" content="blog" />
          <meta property="og:locale" content="ko_KR" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <meta name="keywords" content="blog,development,developer,frontend" />
          {/* for korean keywords */}
          {/* <meta name="keywords" content="blog,development,developer,frontend,블로그,개발,개발자,프론트엔드" /> */}
          <meta name="twitter:creator" content={authorName} />

          {/* for google analytics */}
          {isValid(blogGAID) && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${blogGAID}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${blogGAID}');`,
                }}
              />
            </>
          )}

          {/* for hotjar */}
          {isValid(blogHotjarID) && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${blogHotjarID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
            ></script>
          )}

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
