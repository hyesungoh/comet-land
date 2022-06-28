import { render, screen } from '@testing-library/react';

import { ISkills } from '../../../_content/Skills';
import SkillsSection from './SkillsSection';

const mockSkills: ISkills = {
  title: 'title',
  list: [{ name: 'skill name', descriptions: ['skill dsc'] }],
};

describe('resume - components - SkillsSection', () => {
  it('should render props', () => {
    render(<SkillsSection {...mockSkills} />);
    expect(screen.getByText(mockSkills.title)).toBeInTheDocument();
    expect(screen.getByText(mockSkills.list[0].name)).toBeInTheDocument();
  });
});
