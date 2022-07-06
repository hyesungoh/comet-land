import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { authorImage, authorName, favicon, resumeGAID, resumeHotjarID } from 'core/constants';

import { resumeUrl } from '../../_config';
import { data } from '../../_content/Header';

const TITLE = `${authorName} resume`;

function isValid(value: any) {
  if (typeof value === 'string' && value.length > 0) return true;
  return false;
}

export default class ResumeDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* for NextUI */}
          {CssBaseline.flush()}

          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={data.description} />
          <link rel="canonical" href={resumeUrl} />
          <meta name="keywords" content="resume,development,developer" />
          {/* for korean keywords */}
          {/* <meta name="keywords" content="resume,development,developer,이력서,개발,개발자" /> */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:url" content={resumeUrl} />
          <meta property="og:description" content={data.description} />
          <meta property="og:image" content={authorImage.default.src} />
          <meta name="twitter:creator" content={authorName} />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={data.description} />
          <meta name="twitter:image" content={authorImage.default.src} />

          {/* for google analytics */}
          {isValid(resumeGAID) && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${resumeGAID}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${resumeGAID}');`,
                }}
              />
            </>
          )}

          {/* for hotjar */}
          {isValid(resumeHotjarID) && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${resumeHotjarID},hjsv:6};
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
