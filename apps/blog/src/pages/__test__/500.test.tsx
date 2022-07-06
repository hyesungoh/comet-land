import { ServerError as CoreServerError } from 'core';

import ServerError from '../500.page';

describe('blog - pages - 500', () => {
  it('should defined', () => {
    expect(ServerError).toBeDefined();
  });

  it('should return core ServerError component', () => {
    expect(ServerError).toBe(CoreServerError);
  });
});
