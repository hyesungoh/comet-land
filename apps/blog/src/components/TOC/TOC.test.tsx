import React from 'react';
import { render, screen } from '@testing-library/react';

import TOC from './TOC';

jest.spyOn(React, 'useRef').mockImplementation(() => ({
  current: {
    observe: jest.fn(),
    disconnect: jest.fn(),
  },
}));

jest.spyOn(React, 'useEffect').mockImplementation(f => f());

const TEST_HEADINGS = [
  {
    id: 'heading1',
    text: 'heading1',
  },
  {
    id: 'heading2',
    text: 'some-thing! with @complex',
  },
];

jest.mock('../../utils/getHeadings', () => {
  return {
    __esModule: true,
    default: () => {
      return TEST_HEADINGS;
    },
  };
});

describe('blog - TOC', () => {
  it('does not render when zero headings', () => {
    render(<TOC />);
    expect(screen.queryByText('Contents')).not.toBeInTheDocument();
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it('should render contents when has headings', async () => {
  //   Object.defineProperty(window, 'innerWidth', {
  //     writable: true,
  //     configurable: true,
  //     value: 1500,
  //   });

  //   jest.spyOn(React, 'useState').mockReturnValue([TEST_HEADINGS, () => {}]);

  //   const { rerender } = render(<TOC />);

  //   rerender(<TOC />);
  //   await waitFor(() => {
  //     expect(screen.getByText('Contents')).toBeInTheDocument();
  //   });
  // });
});
