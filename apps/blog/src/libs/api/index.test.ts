import * as api from './index';

describe('blog - libs - api - index', () => {
  it('should defined', () => {
    expect(api).toBeDefined();
    expect(api.getAllCategories).toBeDefined();
    expect(api.getAllPosts).toBeDefined();
    expect(api.getAllPostsByCategory).toBeDefined();
    expect(api.getPostBySlugAndCategory).toBeDefined();
    expect(api.getPostsPathByCategory).toBeDefined();
  });
});
