import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

const mockHeading = 'heading';
const mockDescription = 'description';

describe('resume - component - Header', () => {
  it('should', () => {
    render(<Header heading={mockHeading} description={mockDescription} />);
    expect(screen.getByText(mockHeading)).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });
});
