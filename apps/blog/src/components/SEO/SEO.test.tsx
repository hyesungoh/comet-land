/* eslint-disable testing-library/no-node-access */
import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { authorName } from 'core/constants';

import { blogDescription, blogName } from '../../../_config';
import SEO from './SEO';

function renderAtHead(element: ReactElement) {
  render(element, { container: document.head });
}

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>;
    },
  };
});

describe('blog - components - SEO', () => {
  it('should defined', () => {
    expect(SEO).toBeDefined();
  });

  it('should render title', () => {
    renderAtHead(<SEO />);
    expect(document.title).toBe(`${blogName} - ${authorName}`);
    expect(document.querySelector("meta[name='description']")?.getAttribute('content')).toBe(blogDescription);
  });
});
