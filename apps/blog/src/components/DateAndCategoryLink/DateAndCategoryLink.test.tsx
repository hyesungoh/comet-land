import React from 'react';
import { render, screen } from '@testing-library/react';

import DateAndCategoryLink from './DateAndCategoryLink';

const DATE = '2022-04-14';
const CATEGORY = 'Guide';

describe('blog - component - DateAndCategoryLink', () => {
  it('should defined', () => {
    expect(DateAndCategoryLink).toBeDefined();
  });

  it('should render category props', () => {
    render(<DateAndCategoryLink date={DATE} category={CATEGORY} />);
    expect(screen.getByText(CATEGORY)).toBeInTheDocument();
  });

  it('should render only date withou category', () => {
    render(<DateAndCategoryLink date={DATE} />);
    expect(screen.getByText(DATE)).toBeInTheDocument();
  });
});
