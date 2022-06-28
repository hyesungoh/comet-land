import { NextUITheme } from '@nextui-org/react';
import { render } from '@testing-library/react';

import Default from './index';
import Li from './Li';

const mockTheme = {
  colors: {
    primary: {
      value: 'blue',
    },
  },
};

const mockText = 'list';

describe('resume - components - Li index', () => {
  it('should render same things with Li component', () => {
    const { container: defaultContainer } = render(<Default theme={mockTheme as NextUITheme}>{mockText}</Default>);
    const { container } = render(<Li theme={mockTheme as NextUITheme}>{mockText}</Li>);
    expect(defaultContainer).toEqual(container);
  });
});
