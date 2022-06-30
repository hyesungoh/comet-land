import React from 'react';
import { render } from '@testing-library/react';

import Comments from './Comments';

describe('blog - components - Comments', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should defined', () => {
    expect(Comments).toBeDefined();
  });

  it('should create script tag', () => {
    jest.spyOn(document, 'createElement');
    render(<Comments />);
    expect(document.createElement).lastCalledWith('script');
  });

  it('should useRef called once', () => {
    const useRefSpy = jest.spyOn(React, 'useRef');
    render(<Comments />);
    expect(useRefSpy).toBeCalledTimes(1);
  });

  it('should check html theme', () => {
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    render(<Comments />);
    expect(querySelectorSpy).toHaveBeenCalledWith('html');
  });

  it('should check UTTERANCE already rendered', () => {
    const UTTERANCE_QUERY = '.utterances-frame';
    const querySelectorSpy = jest.spyOn(document, 'querySelector');
    render(<Comments />);
    expect(querySelectorSpy).toHaveBeenCalledWith(UTTERANCE_QUERY);
  });
});
