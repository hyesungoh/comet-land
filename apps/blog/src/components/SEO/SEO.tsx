import Head from 'next/head';
import { useRouter } from 'next/router';
import { authorName, defaultMetaBackground } from 'core/constants';
import { blogName, blogDescription, blogUrl } from '../../../_config';

interface Props {
  title?: string | undefined;
  description?: string | undefined;
  ogImage?: string | null;
}

function SEO({ title, description, ogImage }: Props) {
  const TITLE = title ? `${title} - ${authorName}` : `${blogName} - ${authorName}`;
  const DESCRIPTION = description ? description : blogDescription;
  const router = useRouter();

  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={ogImage ? ogImage : defaultMetaBackground.default.src} />
      <link rel="canonical" href={blogUrl + router.asPath} />

      {/* for twitter */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
    </Head>
  );
}

export default SEO;
