import { Action } from 'kbar';
import manifest from '../../../_content/manifest.json';

const { posts } = manifest;

const postActions: Action[] = [{ id: 'posts', name: 'Posts', section: 'Scope', keywords: 'post, article' }];

posts.forEach(post => {
  postActions.push({
    id: post.slug,
    name: post.title,
    subtitle: post.date,
    parent: 'posts',
    perform: () => {
      location.href = `/${post.slug}`;
    },
  });
});

export default postActions;
