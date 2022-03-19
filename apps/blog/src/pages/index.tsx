import { useTheme } from '@nextui-org/react';
import PostType from '../types/post';
import { getAllPosts } from '../lib/api';
import { getLocalDate } from '../utils/date';
import MainHeader from '../components/Header/MainHeader';
import PostCard from '../components/PostCard';

interface Props {
  allPosts: PostType[];
}

function Blog({ allPosts }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <MainHeader />
      {allPosts.map(({ slug, title, date, category }) => (
        <PostCard slug={slug} title={title} date={date} category={category} theme={theme} />
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
