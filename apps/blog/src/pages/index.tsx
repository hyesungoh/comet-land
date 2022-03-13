import { getAllPosts } from '../lib/api';
import PostType from '../types/post';
import markdownToHtml from '../lib/markdownToHtml';

interface Props {
  allPosts: PostType[];
}

function Blog({ allPosts }: Props) {
  return (
    <div>
      <h1>blog</h1>
      {allPosts.map(post => (
        <div key={post.title}>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'content']);

  const postContent = await markdownToHtml(allPosts[0].content);
  const post = { ...allPosts[0], content: postContent };

  return {
    props: { allPosts: [post, post] },
  };
}
