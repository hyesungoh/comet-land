import NextLink from 'next/link';
import { Link, useTheme } from '@nextui-org/react';
import PostType from '../types/post';
import { getAllPosts } from '../lib/api';
import { getLocalDate } from '../utils/date';
import MainHeader from '../components/Header/MainHeader';

interface Props {
  allPosts: PostType[];
}

function Blog({ allPosts }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <MainHeader />

      {allPosts.map(post => (
        <article style={{ marginTop: '3rem' }}>
          <h3>
            <NextLink href={`/${post.slug}`} passHref>
              <Link underline css={{ color: theme.colors.text.value }}>
                {post.title}
              </Link>
            </NextLink>
          </h3>
          <small style={{ color: theme.colors.accents4.value }}>
            {post.date} / {post.category}
          </small>
        </article>
      ))}
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'category']);

  return {
    props: {
      allPosts: allPosts.map(post => ({ ...post, date: getLocalDate(post.date) })),
    },
  };
}
