import { PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';

import { Icon } from './Icon';

const TEST_ID = 'testid';

function TestId({ children }: PropsWithChildren) {
  return <div data-testid={TEST_ID}>{children}</div>;
}

describe('core - components - Icon index', () => {
  it('should defined Icon', () => {
    expect(Icon).toBeDefined();
  });

  it('should render svg', () => {
    render(
      <TestId>
        <Icon name="Blog" />
      </TestId>
    );
    expect(screen.getByTestId(TEST_ID)).toContainHTML('svg');
  });
});
