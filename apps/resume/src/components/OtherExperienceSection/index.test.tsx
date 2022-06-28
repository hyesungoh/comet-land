import { render } from '@testing-library/react';

import Default from './index';
import OtherExperienceSection from './OtherExperienceSection';

const mockOtherExperience = {
  title: 'title',
  list: [
    {
      title: {
        text: 'experience',
        githubLink: 'githubLink',
        otherLink: 'otherLink',
      },
      position: 'position',
      startDate: '2020.01',
      endDate: '2021.01',
      description: 'description',
      which: ['1', '2'],
    },
  ],
};

describe('resume - components - OtherExperienceSection index', () => {
  it('should render same things with OtherExperienceSection component', () => {
    const { container: defaultContainer } = render(<Default {...mockOtherExperience} />);
    const { container } = render(<OtherExperienceSection {...mockOtherExperience} />);
    expect(defaultContainer).toEqual(container);
  });
});
