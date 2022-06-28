import { render, screen } from '@testing-library/react';

import { NotFound } from './404';

describe('core - components - ErrorPage 404', () => {
  it('should render each roles', () => {
    render(<NotFound />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
