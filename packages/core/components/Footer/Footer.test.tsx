import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { authorName } from '../../constants';

describe('core - Header', () => {
  it('should', () => {
    render(<Footer />);
    expect(screen.getByText(authorName)).toBeInTheDocument();
  });
});
