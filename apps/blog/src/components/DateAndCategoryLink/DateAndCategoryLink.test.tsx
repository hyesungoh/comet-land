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

  it('should render only date without category', () => {
    render(<DateAndCategoryLink date={DATE} />);
    expect(screen.getByText(DATE)).toBeInTheDocument();
  });

  it('should contain date when render with category', () => {
    const testId = 'test';

    function Wrapper() {
      return (
        <div data-testid={testId}>
          <DateAndCategoryLink date={DATE} category={CATEGORY} />
        </div>
      );
    }

    render(<Wrapper />);
    expect(screen.getByTestId(testId)).toHaveTextContent(DATE);
    expect(screen.getByTestId(testId)).toHaveTextContent(CATEGORY);
  });
});
