import { NextUITheme } from '@nextui-org/react';
import { render, screen } from '@testing-library/react';

import Li from './Li';

const mockTheme = {
  colors: {
    primary: {
      value: 'blue',
    },
  },
};

const mockText = 'list';

describe('resume - components - Li', () => {
  it('should render childrend text', () => {
    render(<Li theme={mockTheme as NextUITheme}>{mockText}</Li>);
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });
});
