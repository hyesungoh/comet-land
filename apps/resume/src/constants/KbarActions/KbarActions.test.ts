import generateKbarActions from './KbarActions';

const mockConfig = jest.requireMock('../../../_config');
jest.mock('../../../_config');

const mockSocialActions = jest.requireMock('core/constants');
jest.mock('core/constants');

describe('resume - constants - KbarActions', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should return blog url and email', () => {
    mockConfig.blogUrl = 'mock blogurl';
    mockConfig.email = 'mock email';
    mockSocialActions.socialActions = [];

    const kbarActions = generateKbarActions();
    expect(kbarActions.length).toBe(2);
  });

  it('should not return blog url and email when null and empty string', () => {
    mockConfig.blogUrl = '';
    mockConfig.email = null;
    mockSocialActions.socialActions = [];

    const kbarActions = generateKbarActions();
    expect(kbarActions.length).toBe(0);
  });
});
