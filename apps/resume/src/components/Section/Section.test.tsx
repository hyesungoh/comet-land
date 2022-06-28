import { render, screen } from '@testing-library/react';

import Section from './Section';

describe('resume - components - Section', () => {
  it('should has margin top', () => {
    const SECTION_TEST_ID = 'section';

    render(<Section data-testid={SECTION_TEST_ID}></Section>);
    expect(screen.getByTestId(SECTION_TEST_ID)).toHaveStyle({ marginTop: '3rem' });
  });

  it('should has margin top at only first child', () => {
    const FIRST_DIV_TEST_ID = 'first';
    const SECOND_DIV_TEST_ID = 'second';

    render(
      <Section>
        <div data-testid={FIRST_DIV_TEST_ID}></div>
        <div data-testid={SECOND_DIV_TEST_ID}></div>
      </Section>
    );
    expect(screen.getByTestId(FIRST_DIV_TEST_ID)).toHaveStyle({ marginTop: '2rem' });
    expect(screen.getByTestId(SECOND_DIV_TEST_ID)).not.toHaveStyle({ marginTop: '2rem' });
  });
});
