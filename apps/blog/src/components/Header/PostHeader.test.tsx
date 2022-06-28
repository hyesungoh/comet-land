import { render, screen } from '@testing-library/react';

import { blogName } from '../../../_config';
import { PostHeader } from './PostHeader';

describe('blog - components - Header - PostHeader', () => {
  it('should named defined', () => {
    expect(PostHeader).toBeDefined();
  });

  it('should have level 3 heading', () => {
    render(<PostHeader />);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('should render blog name', () => {
    render(<PostHeader />);
    expect(screen.getByText(blogName)).toBeInTheDocument();
  });

  it('should have blog name link with root href', () => {
    render(<PostHeader />);
    expect(screen.getByRole('link').innerHTML).toBe(blogName);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('should render ThemeSwitch', () => {
    render(<PostHeader />);
    expect(screen.getByLabelText('theme switch')).toBeInTheDocument();
  });

  it('should render KBarToggleButton', () => {
    render(<PostHeader />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
