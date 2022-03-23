import Head from 'next/head';
import { blogName, authorName, blogDescription, authorImage } from 'core/constants';

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
      <meta property="og:image" content={ogImage ? ogImage : authorImage.default.src} />

      {/* for twitter */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
    </Head>
  );
}

export default SEO;
