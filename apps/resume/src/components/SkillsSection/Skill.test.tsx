import { render, screen } from '@testing-library/react';

import { ISkill } from '../../../_content/Skills';
import Skill from './Skill';

const mockSkill: ISkill = {
  name: 'skill name',
  descriptions: ['skill dsc 1', 'skill dsc 2'],
};

describe('resume - components - Skill', () => {
  it('should render props', () => {
    render(<Skill {...mockSkill} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(mockSkill.name)).toBeInTheDocument();
    expect(screen.getByText(mockSkill.descriptions[0])).toBeInTheDocument();
    expect(screen.getByText(mockSkill.descriptions[1])).toBeInTheDocument();
  });
});
