import Head from 'next/head';
import { blogName, authorName, blogDescription } from 'core/constants';

interface Props {
  title?: string | undefined;
  description?: string | undefined;
}

function SEO({ title, description }: Props) {
  const TITLE = title ? `${title} - ${authorName}` : `${blogName} - ${authorName}`;
  const DESCRIPTION = description ? description : blogDescription;

  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content="" />

      {/* for twitter */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
    </Head>
  );
}

export default SEO;
