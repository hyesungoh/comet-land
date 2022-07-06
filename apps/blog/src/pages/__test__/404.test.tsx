import { NotFound as CoreNotFount } from 'core';

import NotFound from '../404.page';

describe('blog - pages - 404', () => {
  it('should defined', () => {
    expect(NotFound).toBeDefined();
  });

  it('should return core NotFound component', () => {
    expect(NotFound).toBe(CoreNotFount);
  });
});
