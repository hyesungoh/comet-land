import Head from 'next/head';
import { useRouter } from 'next/router';
import { authorName, defaultMetaBackground } from 'core/constants';

import { blogDescription, blogName, blogUrl } from '../../../_config';

interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
}

function SEO({ title, description, ogImage }: Props) {
  const router = useRouter();

  const TITLE = title ? `${title} - ${authorName}` : `${blogName} - ${authorName}`;
  const DESCRIPTION = description ? description : blogDescription;
  const URL = blogUrl + router.asPath;
  const IMAGE = ogImage ? ogImage : defaultMetaBackground.default.src;

  return (
    <Head>
      <title>{TITLE}</title>
      <link rel="canonical" href={URL} />
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:url" content={URL} />

      {/* for twitter */}
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE} />
    </Head>
  );
}

export default SEO;
