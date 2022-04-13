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

describe('blog - TOC', () => {
  beforeAll(() => {});

  it('does not render when zero headings', () => {
    render(<TOC />);
    expect(screen.queryByText('Contents')).not.toBeInTheDocument();
  });
});
