import { render } from '@testing-library/react';

import Header from './Header';
import Default from './index';

const mockHeading = 'heading';
const mockDescription = 'description';

describe('resume - components - Header index', () => {
  it('should render same things with Header component', () => {
    const { container: defaultContainer } = render(<Default heading={mockHeading} description={mockDescription} />);
    const { container } = render(<Header heading={mockHeading} description={mockDescription} />);
    expect(defaultContainer).toEqual(container);
  });
});
