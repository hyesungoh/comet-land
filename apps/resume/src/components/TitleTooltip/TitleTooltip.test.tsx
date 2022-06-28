import { render, screen } from '@testing-library/react';

import TitleTooltip from './TitleTooltip';

describe('resume - components - TitleTooltip', () => {
  it('should render props', () => {
    const mockProps = {
      text: 'title',
      githubLink: 'github link',
      otherLink: 'github link',
    };

    render(<TitleTooltip {...mockProps} />);
    expect(screen.getByText(mockProps.text)).toBeInTheDocument();
  });

  it('should not render button when does not have links', () => {
    const mockProps = {
      text: 'title',
      githubLink: null,
      otherLink: null,
    };

    render(<TitleTooltip {...mockProps} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
