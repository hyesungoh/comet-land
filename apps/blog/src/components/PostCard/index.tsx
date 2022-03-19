import NextLink from 'next/link';
import { Link, theme } from '@nextui-org/react';

interface Props {
  slug: string;
  title: string;
  date: string;
  category: string;
  theme: typeof theme;
}

function PostCard({ slug, title, date, category }: Props) {
  return (
    <article style={{ marginTop: '3rem' }}>
      <h3>
        <NextLink href={`/${slug}`} passHref>
          <Link underline css={{ color: theme.colors.text.value }}>
            {title}
          </Link>
        </NextLink>
      </h3>
      <small style={{ color: theme.colors.accents4.value }}>
        {date} / {category}
      </small>
    </article>
  );
}

export default PostCard;
