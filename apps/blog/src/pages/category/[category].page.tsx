import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import AuthorSection from '../../components/AuthorSection';
import { MainHeader } from '../../components/Header';
import PostCard from '../../components/PostCard';
import SEO from '../../components/SEO';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { getAllCategories, getAllPostsByCategory } from '../../libs/api';

interface Props {
  category: string;
  allPosts: PostType[];
}

function EachCategory({ category, allPosts }: Props) {
  const { theme } = useTheme();

  const { setTarget, elements: posts, isEnded } = useInfiniteScroll<PostType>({ offset: 12, fullElements: allPosts });

  return (
    <>
      <SEO title={category} />
      <MainHeader />
      <AuthorSection />
      <H2>
        Posts in <strong>{category}</strong> category
      </H2>
      <main>
        {posts.map(({ slug, title, subtitle, date }) => (
          <PostCard key={slug} slug={slug} title={title} subtitle={subtitle} date={date} theme={theme} />
        ))}
        {!isEnded && <div ref={setTarget}></div>}
      </main>
    </>
  );
}

export default EachCategory;

const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 1.5rem;
`;

interface Paths {
  params: {
    category: string;
  };
}

export async function getStaticPaths() {
  const categories = getAllCategories();

  const paths: Paths[] = [];
  categories.map(category => paths.push({ params: { category } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const allCategories = getAllCategories();
  if (!allCategories.includes(category)) {
    return { notFound: true };
  }
  const postsInCategory = getAllPostsByCategory(category, ['slug', 'title', 'subtitle', 'date']);

  return { props: { category, allPosts: postsInCategory } };
}
