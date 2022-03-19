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
        {posts.map(({ slug, title, date, category, content }) => (
          <>
            <PostCard key={slug} slug={slug} title={title} date={date} category={category} theme={theme} />
            {content}
          </>
        ))}

        {!isEnded && <div ref={setTarget}></div>}
      </main>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'category', 'content']);

  return {
    props: {
      allPosts: allPosts.map(post => ({ ...post, date: getLocalDate(post.date) })),
    },
  };
}
