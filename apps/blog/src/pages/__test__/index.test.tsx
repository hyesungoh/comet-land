import { render, screen } from '@testing-library/react';

import Index from '../index.page';

const MOCK_POST = {
  slug: 'comet-land',
  title: 'Comet-land',
  subtitle: 'blog and resume theme',
  date: '2022-01-01',
  category: 'blog',
  content: '<h2>heading</h2>',
};

describe('blog - pages - index', () => {
  it('should defined', () => {
    expect(Index).toBeDefined();
  });

  it('should render main', () => {
    render(<Index allPosts={[MOCK_POST]} />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render post title', () => {
    render(<Index allPosts={[MOCK_POST]} />);

    expect(screen.getByText(MOCK_POST.title)).toBeInTheDocument();
  });

  it('should has one level 1 heading', () => {
    render(<Index allPosts={[MOCK_POST]} />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
