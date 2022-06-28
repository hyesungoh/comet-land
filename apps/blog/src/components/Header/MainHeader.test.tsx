import { render, screen } from '@testing-library/react';

import { blogName } from '../../../_config';
import { MainHeader } from './MainHeader';

describe('blog - components - Header - MainHeader', () => {
  it('should named defined', () => {
    expect(MainHeader).toBeDefined();
  });

  it('should have level 1 heading', () => {
    render(<MainHeader />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render blog name with heading', () => {
    render(<MainHeader />);
    expect(screen.getByText(blogName)).toBeInTheDocument();
  });

  it('should have blog name link with root href', () => {
    render(<MainHeader />);
    expect(screen.getByRole('link').innerHTML).toBe(blogName);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('should render ThemeSwitch', () => {
    render(<MainHeader />);
    expect(screen.getByLabelText('theme switch')).toBeInTheDocument();
  });

  it('should render KBarToggleButton', () => {
    render(<MainHeader />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
