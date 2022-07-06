import { render, screen } from '@testing-library/react';

import { data as headerData } from '../../../_content/Header';
import { data as otherExperienceDate } from '../../../_content/Other-Experience';
import { data as skillsData } from '../../../_content/Skills';
import { data as workExperienceData } from '../../../_content/Work-Experience';
import Resume from '../index.page';

describe('resume - pages - index', () => {
  it('should defined', () => {
    expect(Resume).toBeDefined();
  });

  it('should render main', () => {
    render(
      <Resume
        header={headerData}
        workExperience={workExperienceData}
        otherExperience={otherExperienceDate}
        skills={skillsData}
      />
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
