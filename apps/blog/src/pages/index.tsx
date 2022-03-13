import { getAllPosts } from '../lib/api';
import PostType from '../types/post';

export function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date']);

  return {
    props: { allPosts },
  };
}

interface Props {
  allPosts: PostType[];
}

function Blog({ allPosts }: Props) {
  console.log(allPosts);
  return <div>Blog</div>;
}

export default Blog;
