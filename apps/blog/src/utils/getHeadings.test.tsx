import { render } from '@testing-library/react';

import getHeadings from './getHeadings';

const HEADING_CLASS_NAME = 'heading';

const TEST_HEADINGS = [
  {
    id: 'heading1',
    text: 'heading1',
  },
  {
    id: 'heading2',
    text: 'some-thing! with @complex',
  },
];

const NON_HEADING_TEXT = 'nonheading';

function App() {
  return (
    <div>
      {TEST_HEADINGS.map(eachHeading => (
        <h2 id={eachHeading.id} className={HEADING_CLASS_NAME} key={eachHeading.id}>
          {eachHeading.text}
        </h2>
      ))}
      <h2 id={NON_HEADING_TEXT}>{NON_HEADING_TEXT}</h2>
    </div>
  );
}

describe('blog - utils - getHeadings', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'innerText', {
      get() {
        return this.textContent;
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should defined', () => {
    expect(getHeadings).toBeDefined();
  });

  it('should return empty array when can not find headings', () => {
    const querySelectorAllSpy = jest.spyOn(document, 'querySelectorAll');
    const result = getHeadings();

    expect(querySelectorAllSpy).toHaveBeenCalledWith(`.${HEADING_CLASS_NAME}`);
    expect(result).toHaveLength(0);
  });

  it('should return id and text what heading with heading class name', () => {
    render(<App />);
    const result = getHeadings();

    expect(result).toHaveLength(TEST_HEADINGS.length);
    expect(result[0].id).toBe(TEST_HEADINGS[0].id);
    expect(result[0].text).toBe(TEST_HEADINGS[0].text);
    expect(result[1].id).toBe(TEST_HEADINGS[1].id);
    expect(result[1].text).toBe(TEST_HEADINGS[1].text);
  });
});
