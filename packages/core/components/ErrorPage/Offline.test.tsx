import { render, screen } from '@testing-library/react';

import { Offline } from './Offline';

describe('core - components - ErrorPage Offline', () => {
  it('should render each roles', () => {
    render(<Offline />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
