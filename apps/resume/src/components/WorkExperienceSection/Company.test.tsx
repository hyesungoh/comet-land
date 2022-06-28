import { render, screen } from '@testing-library/react';

import Company from './Company';

const mockData = {
  name: 'company name',
  position: 'position name',
  startDate: '2020.01',
  endDate: '2021.01',
  description: 'description data',
};

describe('resume - components - Company', () => {
  it('should render all props', () => {
    render(<Company {...mockData} />);
    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.position)).toBeInTheDocument();
    expect(screen.getByText(`${mockData.startDate} ~ ${mockData.endDate}`)).toBeInTheDocument();
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });

  it('should sticky', () => {
    render(<Company {...mockData} />);
    expect(screen.getByTestId('wrapper')).toHaveStyle('position: sticky;');
  });
});
