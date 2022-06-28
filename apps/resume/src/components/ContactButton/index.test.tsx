import { render } from '@testing-library/react';

import ContactButton from './ContactButton';
import Default from './index';

describe('resume - components - ContactButton index', () => {
  it('should render same things with ContactButton component', () => {
    const { container: defaultContainer } = render(<Default />);
    const { container } = render(<ContactButton />);
    expect(defaultContainer).toEqual(container);
  });
});
