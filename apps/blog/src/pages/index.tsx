import { useTheme } from '@nextui-org/react';
import PostType from '../types/post';
import { getAllPosts } from '../lib/api';
import MainHeader from '../components/Header/MainHeader';
import PostCard from '../components/PostCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import AuthorSection from '../components/AuthorSection';

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
      <AuthorSection />
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

  return {
    props: {
      allPosts,
    },
  };
}
