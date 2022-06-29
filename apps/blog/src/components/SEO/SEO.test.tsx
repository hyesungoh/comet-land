/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import { authorName, defaultMetaBackground } from 'core/constants';

import { blogDescription, blogName, blogUrl } from '../../../_config';
import SEO from './SEO';

function renderAtHead(element) {
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

const mockTitle = 'mockTitle';
const mockDescription = 'mockDescription';
const mockOgImage = 'mockOgImage';

describe('blog - components - SEO', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should defined', () => {
    expect(SEO).toBeDefined();
  });

  it('should TITLE to be "blogName - authorName" when without title props', () => {
    renderAtHead(<SEO />);

    const correctTitle = `${blogName} - ${authorName}`;

    // title
    expect(document.title).toBe(correctTitle);
    // og:title
    expect(document.querySelector("meta[property='og:title']")?.getAttribute('content')).toBe(correctTitle);
    // twitter:title
    expect(document.querySelector("meta[name='twitter:title']")?.getAttribute('content')).toBe(correctTitle);
  });

  it('should TITLE contain title props and authorName', () => {
    renderAtHead(<SEO title={mockTitle} />);

    const correctTitle = `${mockTitle} - ${authorName}`;

    // title
    expect(document.title).toBe(correctTitle);
    // og:title
    expect(document.querySelector("meta[property='og:title']")?.getAttribute('content')).toBe(correctTitle);
    // twitter:title
    expect(document.querySelector("meta[name='twitter:title']")?.getAttribute('content')).toBe(correctTitle);
  });

  it('should URL to be blogUrl', () => {
    renderAtHead(<SEO title={mockTitle} />);

    // canonical
    expect(document.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe(blogUrl);
    // og:url
    expect(document.querySelector("meta[property='og:url']")?.getAttribute('content')).toBe(blogUrl);
  });

  it('should URL contain path', () => {
    const mockPath = '/foo';
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');
    useRouter.mockImplementationOnce(() => ({
      asPath: mockPath,
    }));

    renderAtHead(<SEO title={mockTitle} />);

    // canonical
    expect(document.querySelector("link[rel='canonical']")?.getAttribute('href')).toBe(blogUrl + mockPath);
    // og:url
    expect(document.querySelector("meta[property='og:url']")?.getAttribute('content')).toBe(blogUrl + mockPath);
  });

  it('should DESCRIPTION to be blogDescription when witout description props', () => {
    renderAtHead(<SEO />);

    // description
    expect(document.querySelector("meta[name='description']")?.getAttribute('content')).toBe(blogDescription);
    // og:description
    expect(document.querySelector("meta[property='og:description']")?.getAttribute('content')).toBe(blogDescription);
    // twitter:description
    expect(document.querySelector("meta[name='twitter:description']")?.getAttribute('content')).toBe(blogDescription);
  });

  it('should DESCRIPTION to be description props', () => {
    renderAtHead(<SEO description={mockDescription} />);

    // description
    expect(document.querySelector("meta[name='description']")?.getAttribute('content')).toBe(mockDescription);
    // og:description
    expect(document.querySelector("meta[property='og:description']")?.getAttribute('content')).toBe(mockDescription);
    // twitter:description
    expect(document.querySelector("meta[name='twitter:description']")?.getAttribute('content')).toBe(mockDescription);
  });

  it('should IMAGE to be defaultMetaBackground when without ogImage props', () => {
    renderAtHead(<SEO />);

    // og:image
    expect(document.querySelector("meta[property='og:image']")?.getAttribute('content')).toBe(
      defaultMetaBackground.default.src
    );
    // twitter:image
    expect(document.querySelector("meta[name='twitter:image']")?.getAttribute('content')).toBe(
      defaultMetaBackground.default.src
    );
  });

  it('should IMAGE to be ogImage props', () => {
    renderAtHead(<SEO ogImage={mockOgImage} />);

    // og:image
    expect(document.querySelector("meta[property='og:image']")?.getAttribute('content')).toBe(mockOgImage);
    // twitter:image
    expect(document.querySelector("meta[name='twitter:image']")?.getAttribute('content')).toBe(mockOgImage);
  });
});
