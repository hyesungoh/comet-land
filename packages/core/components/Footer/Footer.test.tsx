import { render, screen } from '@testing-library/react';

import { authorName } from '../../constants';
import { Footer } from './Footer';

describe('core - Header', () => {
  it('should', () => {
    render(<Footer />);
    expect(screen.getByText(authorName)).toBeInTheDocument();
  });
});
