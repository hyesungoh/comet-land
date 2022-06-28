import { theme } from '@nextui-org/react';
import { render, screen, within } from '@testing-library/react';

import PostCard from './PostCard';

const mockSlug = 'slug';
const mockTitle = 'title';
const mockSubtitle = 'subtitle';
const mockDate = '2020-02-02';
const mockCategory = 'category';
const mockTheme = theme;

describe('blog - components - PostCard', () => {
  it('should default defined', () => {
    expect(PostCard).toBeDefined();
  });

  it('should render title with level 3 heading', () => {
    render(<PostCard slug={mockSlug} title={mockTitle} date={mockDate} theme={mockTheme} />);
    const level3Heading = screen.getByRole('heading', { level: 3 });
    expect(level3Heading).toBeInTheDocument();
    expect(within(level3Heading).getByText(mockTitle)).toBeInTheDocument();
  });

  it('should have link to slug within level 3 heading', () => {
    render(<PostCard slug={mockSlug} title={mockTitle} date={mockDate} theme={mockTheme} />);
    const level3Heading = screen.getByRole('heading', { level: 3 });
    const linkWithinLevel3Heading = within(level3Heading).getByRole('link');
    expect(linkWithinLevel3Heading).toBeInTheDocument();
    expect(linkWithinLevel3Heading).toHaveAttribute('href', `/${mockSlug}`);
  });

  it('should render subtitle when passing to props', () => {
    render(<PostCard slug={mockSlug} title={mockTitle} date={mockDate} theme={mockTheme} subtitle={mockSubtitle} />);
    expect(screen.getByText(mockSubtitle)).toBeInTheDocument();
  });

  it('should render date', () => {
    render(<PostCard slug={mockSlug} title={mockTitle} date={mockDate} theme={mockTheme} />);
    expect(screen.getByRole('article')).toHaveTextContent(mockDate);
  });

  it('should render category when passing props', () => {
    render(<PostCard slug={mockSlug} title={mockTitle} date={mockDate} theme={mockTheme} category={mockCategory} />);
    expect(screen.getByRole('article')).toHaveTextContent(mockCategory);
  });
});
