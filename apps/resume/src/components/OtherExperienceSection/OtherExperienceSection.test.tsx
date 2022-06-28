import { render, screen } from '@testing-library/react';

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

describe('resume - components - OtherExperienceSection', () => {
  it('should render props', () => {
    render(<OtherExperienceSection {...mockOtherExperience} />);
    expect(screen.getByText(mockOtherExperience.title)).toBeInTheDocument();
    expect(screen.getByText(mockOtherExperience.list[0].title.text)).toBeInTheDocument();
  });
});
