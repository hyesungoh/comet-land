import { render, screen } from '@testing-library/react';

import Category from '../../category/[category].page';

const MOCK_CATEGORY = 'mockCategory';
const MOCK_POST = {
  slug: 'comet-land',
  title: 'Comet-land',
  subtitle: 'blog and resume theme',
  date: '2022-01-01',
  category: 'blog',
  content: '<h2>heading</h2>',
};

describe('blog - pages - category - [category]', () => {
  it('should defined', () => {
    expect(Category).toBeDefined();
  });

  it('should render main', () => {
    render(<Category category={MOCK_CATEGORY} allPosts={[MOCK_POST]} />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render allPosts props', () => {
    render(<Category category={MOCK_CATEGORY} allPosts={[MOCK_POST]} />);

    expect(screen.getByText(MOCK_POST.title)).toBeInTheDocument();
    expect(screen.getByText(MOCK_POST.subtitle)).toBeInTheDocument();
  });

  it('should render category at lever 2 heading', () => {
    render(<Category category={MOCK_CATEGORY} allPosts={[]} />);

    expect(screen.getAllByRole('heading', { level: 2 }).at(-1)).toHaveTextContent(MOCK_CATEGORY);
  });
});
