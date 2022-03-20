import { useTheme } from '@nextui-org/react';
import PostType from '../types/post';
import { getAllPosts } from '../lib/api';
import { getLocalDate } from '../utils/date';
import MainHeader from '../components/Header/MainHeader';
import PostCard from '../components/PostCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

interface Props {
  allPosts: PostType[];
}

function Blog({ allPosts }: Props) {
  const { theme } = useTheme();

  const {
    setTarget,
    elements: posts,
    isEnded,
  } = useInfiniteScroll<PostType>({ fullElements: allPosts, offset: 10, rootMargin: '100px' });

  return (
    <>
      <MainHeader />
      <main>
        {posts.map(({ slug, title, date, category, subtitle }) => (
          <PostCard
            key={slug}
            slug={slug}
            title={title}
            subtitle={subtitle}
            date={date}
            category={category}
            theme={theme}
          />
        ))}

        {!isEnded && <div ref={setTarget}></div>}
      </main>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'category', 'subtitle']);

  function getFormattedPost(post) {
    const formattedDate = getLocalDate(post.date);
    return { ...post, date: formattedDate };
  }

  const formattedPosts = allPosts.map(post => getFormattedPost(post));

  return {
    props: {
      allPosts: formattedPosts,
    },
  };
}
