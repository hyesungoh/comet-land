import { render } from '@testing-library/react';

import Default from './index';
import Section from './Section';

describe('resume - components - Section index', () => {
  it('should render same things with Section component', () => {
    const { container: defaultContainer } = render(<Default></Default>);
    const { container } = render(<Section></Section>);
    expect(defaultContainer).toEqual(container);
  });
});
