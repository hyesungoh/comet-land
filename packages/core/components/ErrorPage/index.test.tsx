import { render } from '@testing-library/react';

import { NotFound } from './404';
import { ServerError } from './500';
import { NotFound as DefaultNotFound, Offline as DefaultOffline, ServerError as DefaultServerError } from './index';
import { Offline } from './Offline';

describe('core - components - ErrorPage index', () => {
  it('should render NotFound component', () => {
    const { container: defaultContainer } = render(<DefaultNotFound />);
    const { container } = render(<NotFound />);

    expect(defaultContainer).toEqual(container);
  });

  it('should render ServerError component', () => {
    const { container: defaultContainer } = render(<DefaultServerError />);
    const { container } = render(<ServerError />);

    expect(defaultContainer).toEqual(container);
  });

  it('should render Offline component', () => {
    const { container: defaultContainer } = render(<DefaultOffline />);
    const { container } = render(<Offline />);

    expect(defaultContainer).toEqual(container);
  });
});
