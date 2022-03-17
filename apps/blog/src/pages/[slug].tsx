import { getAllPosts } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import { getLocalDate } from '../utils/date';

interface Props {
  title: string;
  category: string;
  date: string;
  content: string;
}

function Post({ title, category, date, content }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{date}</p>
      <article dangerouslySetInnerHTML={{ __html: content }}></article>
    </div>
  );
}

export default Post;

interface Paths {
  params: {
    slug: string;
  };
}

export async function getStaticPaths() {
  const allPosts = getAllPosts(['slug']);

  const paths: Paths[] = [];
  allPosts.map(post => paths.push({ params: { slug: post.slug } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // 한 개만 찾는 api 만들어서 리팩토링해야함
  const allPosts = getAllPosts(['title', 'date', 'category', 'content', 'slug']);
  const currentPost = allPosts.filter(post => post.slug === slug)[0];
  const content = await markdownToHtml(currentPost.content);

  return {
    props: {
      title: currentPost.title,
      category: currentPost.category,
      date: getLocalDate(currentPost.date),
      content,
    },
  };
}
