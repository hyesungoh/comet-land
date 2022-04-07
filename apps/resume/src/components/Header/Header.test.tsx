import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

const HEADING = 'heading';
const DESCRIPTION = 'description';

describe('resume - component - Header', () => {
  it('should', () => {
    render(<Header heading={HEADING} description={DESCRIPTION} />);
    expect(screen.getByText(HEADING)).toBeInTheDocument();
    expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
  });
});
