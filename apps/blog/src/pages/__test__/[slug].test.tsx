import React from 'react';
import { render, screen } from '@testing-library/react';

import Slug from '../[slug].page';

const MOCK_POST = {
  slug: 'comet-land',
  title: 'Comet-land',
  subtitle: 'blog and resume theme',
  date: '2022-01-01',
  category: 'blog',
  content: '<h2>heading</h2>',
  ogImage: null,
};

// NOTE: prevent ResizeObserver and IntersectionObserver at PageProgressBar, TOC
jest.spyOn(React, 'useEffect').mockImplementation(f => f());

describe('blog - pages - [slug]', () => {
  it('should defined', () => {
    expect(Slug).toBeDefined();
  });

  it('should render main', () => {
    render(<Slug {...MOCK_POST} />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render one level 1 heading', () => {
    render(<Slug {...MOCK_POST} />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
