import { render, screen } from '@testing-library/react';
import { executionAsyncResource } from 'async_hooks';

import Comments from './Comments';

describe('dd', () => {
  it('dd', () => {
    const createElement = jest.spyOn('document', 'createElement');

    render(<Comments />);

    expect(createElement).toBeCalledWith('script');

    expect(1).toBe(1);
  });
});
