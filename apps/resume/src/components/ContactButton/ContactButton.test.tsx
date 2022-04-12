import React from 'react';
import { render, screen } from '@testing-library/react';

import ContactButton from './ContactButton';

describe('resume - component - ContactButton', () => {
  beforeAll(() => {});

  it('should', () => {
    render(<ContactButton />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
