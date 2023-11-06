import { useTheme } from '@nextui-org/react';

import AuthorSection from '../components/AuthorSection';
import { MainHeader } from '../components/Header';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { getAllPosts } from '../libs/api';

interface Props {
  allPosts: PostType[];
}

function Blog({ allPosts }: Props) {
  const { theme } = useTheme();

  const {
    setTarget,
    elements: posts,
    isEnded,
  } = useInfiniteScroll<PostType>({ fullElements: allPosts, offset: 12, rootMargin: '100px' });

  return (
    <>
      <SEO />
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
