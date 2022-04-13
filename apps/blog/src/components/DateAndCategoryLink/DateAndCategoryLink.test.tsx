import React from 'react';
import { render, screen } from '@testing-library/react';

import DateAndCategoryLink from './DateAndCategoryLink';

const DATE = '2022-04-14';
const CATEGORY = 'Guide';

describe('blog - component - DateAndCategoryLink', () => {
  it('should', () => {
    render(<DateAndCategoryLink date={DATE} category={CATEGORY} />);
    expect(screen.getByText(CATEGORY)).toBeInTheDocument();
  });
});
