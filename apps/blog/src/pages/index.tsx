import { getAllPosts } from '../lib/api';
import PostType from '../types/post';
import { KbarButton, ThemeSwitch } from 'core';
import { getLocalDate } from '../utils/date';
import Link from 'next/link';

interface Props {
  allPosts: PostType[];
}

function Blog({ allPosts }: Props) {
  return (
    <div>
      <ThemeSwitch />
      <KbarButton />

      <Link href="/category">category</Link>

      <h1>blog</h1>

      {allPosts.map(post => (
        <>
          <h3>{post.title}</h3>
          <p>{post.date}</p>
        </>
      ))}
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date']);

  return {
    props: {
      allPosts: allPosts.map(post => ({ ...post, date: getLocalDate(post.date) })),
    },
  };
}
