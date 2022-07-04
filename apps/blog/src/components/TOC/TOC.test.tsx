import React from 'react';
import { render, screen } from '@testing-library/react';

import TOC from './TOC';

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

class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

describe('blog - components - TOC', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render when has headings', () => {
    render(<TOC />);
    expect(screen.getByText('Contents')).toBeInTheDocument();
  });

  it('should render heading text', () => {
    render(<TOC />);

    expect(screen.getByText(TEST_HEADINGS[0].text)).toBeInTheDocument();
    expect(screen.getByText(TEST_HEADINGS[1].text)).toBeInTheDocument();
  });

  it('should render heading to link with id href', () => {
    render(<TOC />);

    expect(screen.getByText(TEST_HEADINGS[0].text).getAttribute('href')).toBe(`#${TEST_HEADINGS[0].id}`);
    expect(screen.getByText(TEST_HEADINGS[1].text).getAttribute('href')).toBe(`#${TEST_HEADINGS[1].id}`);
  });
});
