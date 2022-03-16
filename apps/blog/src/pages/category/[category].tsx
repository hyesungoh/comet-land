import { getAllCategories, getAllPostsByCategory } from '../../lib/api';
import PostType from '../../types/post';

interface Props {
  category: string;
  posts: PostType[];
}

function EachCategory({ category, posts }: Props) {
  console.log(posts);
  return (
    <div>
      <h1>{category}</h1>
      {posts.map(post => (
        <h3>{post.title}</h3>
      ))}
    </div>
  );
}

export default EachCategory;

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
  const postsInCategory = getAllPostsByCategory(category, ['title']);

  return { props: { category, posts: postsInCategory } };
}
