import { NextRouter } from 'next/router';
import { socialActions } from 'core/constants';

import categoryActions from './categories';
import generateKbarAction from './index';
import postActions from './posts';

describe('blog - libs/kbarActions/index', () => {
  it('should defined', () => {
    expect(generateKbarAction).toBeDefined();
  });

  it('s results length should be greater than or equal with other actions', () => {
    const router = jest.fn(() => {
      push: jest.fn();
    }) as any as NextRouter;

    const result = generateKbarAction(router);
    const otherActionsLength = categoryActions.length + postActions.length + socialActions.length;
    expect(result.length).toBeGreaterThanOrEqual(otherActionsLength);
  });
});
