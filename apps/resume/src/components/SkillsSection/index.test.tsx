import { render } from '@testing-library/react';

import { ISkills } from '../../../_content/Skills';
import Default from './index';
import SkillsSection from './SkillsSection';

const mockSkills: ISkills = {
  title: 'title',
  list: [{ name: 'skill name', descriptions: ['skill dsc'] }],
};

describe('resume - components - SkillsSection index', () => {
  it('should render same things with SkillsSection component', () => {
    const { container: defaultContainer } = render(<Default {...mockSkills} />);
    const { container } = render(<SkillsSection {...mockSkills} />);
    expect(defaultContainer).toEqual(container);
  });
});
