import { render, screen } from '@testing-library/react';
import React from 'react';

import ContactButton from './ContactButton';

describe('resume - component - ContactButton', () => {
  beforeAll(() => {
    window.matchMedia = query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });

  it('should', () => {
    render(<ContactButton />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
