import { render, screen } from '@testing-library/react';

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

describe('resume - components - WorkExperienceSection', () => {
  it('should render all props', () => {
    render(<WorkExperienceSection {...mockData} />);
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.list[0].name)).toBeInTheDocument();
  });
});
