import { render, screen } from '@testing-library/react';

import Project from './Project';

describe('resume - components - Project', () => {
  it('should render all props', () => {
    const mockData = {
      title: {
        text: 'title text',
        githubLink: '',
        otherLink: '',
      },
      description: 'project description',
      startDate: '2020.01',
      endDate: '2021.01',
      which: ['lorem foo bar', 'bar foo baz'],
      techStack: ['react', 'typescript'],
    };

    render(<Project {...mockData} />);
    expect(screen.getByText(mockData.title.text)).toBeInTheDocument();
    expect(screen.getByText(`${mockData.startDate} ~ ${mockData.endDate}`)).toBeInTheDocument();
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
    expect(screen.getByText(mockData.which[0])).toBeInTheDocument();
    expect(screen.getByText(mockData.which[1])).toBeInTheDocument();
    expect(screen.getByText(mockData.techStack[0])).toBeInTheDocument();
    expect(screen.getByText(mockData.techStack[1])).toBeInTheDocument();
  });

  it('should not render when empty which and teckStack', () => {
    const mockData = {
      title: {
        text: 'title text',
        githubLink: '',
        otherLink: '',
      },
      description: 'project description',
      startDate: '2020.01',
      endDate: '2021.01',
      which: [],
      techStack: [],
    };

    render(<Project {...mockData} />);
    expect(screen.queryByTestId('which wrapper')).not.toBeInTheDocument();
    expect(screen.queryByTestId('tech stack wrapper')).not.toBeInTheDocument();
  });
});
