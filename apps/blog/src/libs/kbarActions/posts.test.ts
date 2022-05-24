import { posts as manifestPosts } from '../../../_content/manifest.json';
import postsActions from './posts';

describe('blog - libs/kbarActions/posts', () => {
  it('should defined', () => {
    expect(postsActions).toBeDefined();
  });

  it('should have same length with manifest', () => {
    expect(postsActions.length - 1).toBe(manifestPosts.length);
  });
});
