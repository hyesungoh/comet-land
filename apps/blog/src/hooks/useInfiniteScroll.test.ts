import { renderHook } from '@testing-library/react-hooks';

import useInfiniteScroll from './useInfiniteScroll';

const mockElements = Array(100).fill(1);
const mockOffset = 12;

describe('hook test - infinite scroll', () => {
  it('default type check', () => {
    const {
      result: {
        current: { elements, setTarget, isEnded },
      },
    } = renderHook(() => useInfiniteScroll({ fullElements: mockElements, offset: mockOffset }));

    expect(isEnded).toBe(false);
    expect(elements.length).toBe(mockOffset);
    expect(typeof setTarget).toBe('function');
  });
});
