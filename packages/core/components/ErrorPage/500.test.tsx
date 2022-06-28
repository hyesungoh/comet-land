import { render, screen } from '@testing-library/react';

import { ServerError } from './500';

describe('core - components - ErrorPage 500', () => {
  it('should render each roles', () => {
    render(<ServerError />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
