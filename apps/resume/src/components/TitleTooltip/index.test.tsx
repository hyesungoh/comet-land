import { render } from '@testing-library/react';

import Default from './index';
import TitleTooltip from './TitleTooltip';

const mockProps = {
  text: 'title',
  githubLink: 'github link',
  otherLink: 'github link',
};

describe('resume - components - TitleTooltip index', () => {
  it('should render same things with TitleTooltip component', () => {
    const { container: defaultContainer } = render(<Default {...mockProps} />);
    const { container } = render(<TitleTooltip {...mockProps} />);
    expect(defaultContainer).toEqual(container);
  });
});
