import Head from 'next/head';
import { authorName, defaultMetaBackground } from 'core/constants';
import { blogName, blogDescription } from '../../../_config';

interface Props {
  title?: string | undefined;
  description?: string | undefined;
  ogImage?: string | null;
}

function SEO({ title, description, ogImage }: Props) {
  const TITLE = title ? `${title} - ${authorName}` : `${blogName} - ${authorName}`;
  const DESCRIPTION = description ? description : blogDescription;

  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={ogImage ? ogImage : defaultMetaBackground.default.src} />

      {/* for twitter */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
    </Head>
  );
}

export default SEO;
