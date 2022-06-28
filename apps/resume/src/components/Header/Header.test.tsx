import { render, screen } from '@testing-library/react';

import Header from './Header';

const mockHeading = 'heading';
const mockDescription = 'description';

describe('resume - components - Header', () => {
  it('should render props', () => {
    render(<Header heading={mockHeading} description={mockDescription} />);
    expect(screen.getByText(mockHeading)).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });

  it('should render images with alt text', () => {
    render(<Header heading={mockHeading} description={mockDescription} />);
    expect(screen.getByRole('img').hasAttribute('alt')).toBeTruthy();
  });
});
