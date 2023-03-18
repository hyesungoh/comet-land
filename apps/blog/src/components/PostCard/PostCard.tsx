import NextLink from 'next/link';
import styled from '@emotion/styled';
import { Link, NextUITheme, theme } from '@nextui-org/react';

import DateAndCategoryLink from '../DateAndCategoryLink';

interface Props {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category?: string;
  theme: typeof theme;
}

function PostCard({ slug, title, subtitle, date, category, theme }: Props) {
  return (
    <Article>
      <h3>
        <Link as={NextLink} href={`/${slug}`} underline css={{ color: theme.colors.text.value }}>
          {title}
        </Link>
      </h3>
      <Small theme={theme}>
        <DateAndCategoryLink date={date} category={category} />
      </Small>
      {subtitle && <P>{subtitle}</P>}
    </Article>
  );
}

export default PostCard;

const Article = styled.article`
  width: 100%;
  margin-bottom: 2.5rem;
`;

const Small = styled.small<{ theme: NextUITheme | undefined }>`
  color: ${({ theme }) => theme.colors.accents6.value};
`;

const P = styled.p`
  width: 100%;
  margin: 0;
`;
