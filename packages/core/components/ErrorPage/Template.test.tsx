import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';

import { ErrorTemplate } from './Template';

const mockProps: ComponentProps<typeof ErrorTemplate> = {
  errorTitle: 'Error',
  paragraph: 'paragraph',
  anchorMessage: 'anchor',
};

describe('core - components - ErrorPage Template', () => {
  it('should render props', () => {
    render(<ErrorTemplate {...mockProps} />);

    expect(screen.getByText(mockProps.errorTitle)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText(mockProps.paragraph)).toBeInTheDocument();
    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
    expect(screen.getByText(mockProps.anchorMessage)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  // TODO: testing called useTheme
});
