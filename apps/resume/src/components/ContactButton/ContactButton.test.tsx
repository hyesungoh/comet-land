import { render, screen } from '@testing-library/react';

import ContactButton from './ContactButton';

describe('resume - component - ContactButton', () => {
  it('should render button', () => {
    render(<ContactButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
