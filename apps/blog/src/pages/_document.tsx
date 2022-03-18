import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Footer, GlobalStyle, Layout } from 'core';

export default class BlogDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
