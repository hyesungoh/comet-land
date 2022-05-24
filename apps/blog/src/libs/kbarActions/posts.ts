import { IconActionType } from 'core/constants';

import manifest from '../../../_content/manifest.json';

const { posts } = manifest;

const postActions: IconActionType[] = [{ id: 'posts', name: 'Posts', section: 'Scope', keywords: 'post, article' }];

posts.forEach(post => {
  postActions.push({
    id: post.slug,
    name: post.title,
    subtitle: post.date,
    parent: 'posts',
    icon: 'ChevronRight',
  });
});

export default postActions;
