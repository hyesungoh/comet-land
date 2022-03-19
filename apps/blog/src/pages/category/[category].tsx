import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';
import PostCard from '../../components/PostCard';
import MainHeader from '../../components/Header/MainHeader';
import PostType from '../../types/post';
import { getLocalDate } from '../../utils/date';
import { getAllCategories, getAllPostsByCategory } from '../../lib/api';

interface Props {
  category: string;
  posts: PostType[];
}

function EachCategory({ category, posts }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <MainHeader />
      <H2>
        Posts in <strong>{category}</strong> category
      </H2>
      <main>
        {posts.map(({ slug, title, date }) => (
          <PostCard key={slug} slug={slug} title={title} date={date} theme={theme} />
        ))}
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
  const postsInCategory = getAllPostsByCategory(category, ['slug', 'title', 'date']);

  return { props: { category, posts: postsInCategory.map(post => ({ ...post, date: getLocalDate(post.date) })) } };
}
