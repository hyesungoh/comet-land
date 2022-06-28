import { render } from '@testing-library/react';

import Default from './index';
import WorkExperienceSection from './WorkExperienceSection';

const mockData = {
  title: 'Work Experience Section',
  list: [
    {
      name: 'list name',
      position: 'list position',
      startDate: '2020.01',
      endDate: '2021.01',
      description: 'list dsc',
      projects: [
        {
          title: { text: 'project title', githubLink: '', otherLink: '' },
          description: 'project dsc',
          startDate: '2020.01',
          endDate: '2021.01',
          which: [],
          techStack: [],
        },
      ],
    },
  ],
};

describe('resume - components - WorkExperienceSection index', () => {
  it('should render same things with WorkExperienceSection components', () => {
    const { container: defaultContainer } = render(<Default {...mockData} />);
    const { container } = render(<WorkExperienceSection {...mockData} />);
    expect(defaultContainer).toEqual(container);
  });
});
