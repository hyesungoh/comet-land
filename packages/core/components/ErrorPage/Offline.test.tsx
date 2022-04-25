import React from 'react';
import { render, screen } from '@testing-library/react';

import { Offline } from './Offline';

describe('core - components - Offline', () => {
  it('should render each roles', () => {
    render(<Offline />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
