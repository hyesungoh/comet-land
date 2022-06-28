import { render, screen } from '@testing-library/react';
import { authorName, defaultUrl } from 'core/constants';

import { blogDescription } from '../../../_config';
import AuthorSection from './AuthorSection';

describe('blog - components - AuthorSection', () => {
  it('should defined', () => {
    expect(AuthorSection).toBeDefined();
  });

  it('should render blog description', () => {
    render(<AuthorSection />);
    expect(screen.getByText(blogDescription)).toBeInTheDocument();
  });

  it('should render image with author name alt', () => {
    render(<AuthorSection />);
    expect(screen.getByAltText(authorName)).toBeInTheDocument();
  });

  it('should author name is link content', () => {
    render(<AuthorSection />);
    expect(screen.getByRole('link')).toHaveTextContent(authorName);
  });

  it('should link href is default url', () => {
    render(<AuthorSection />);
    expect(screen.getByRole('link')).toHaveAttribute('href', defaultUrl);
  });

  it('should render with hasKbarButton props', () => {
    render(<AuthorSection hasKbarButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
