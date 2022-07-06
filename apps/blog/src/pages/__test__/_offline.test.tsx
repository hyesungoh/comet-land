import { Offline as CoreOffline } from 'core';

import Offline from '../_offline.page';

describe('blog - pages - offline', () => {
  it('should defined', () => {
    expect(Offline).toBeDefined();
  });

  it('should return core NotFound component', () => {
    expect(Offline).toBe(CoreOffline);
  });
});
