import { data as workExperienceData } from '../../../_content/Work-Experience';

describe('root - work experience', { testIsolation: false }, () => {
  it('should render work experience title', () => {
    cy.visit('/');
    // NOTE: scrollIntoView is used because user can change the position of work experience section.
    cy.get('h2').contains(workExperienceData.title).scrollIntoView();
  });

  const FIRST_EXPERIENCE = workExperienceData.list[0];

  it('should render first company name with level 3 heading', () => {
    cy.get('h3').should('contain', FIRST_EXPERIENCE.name);
  });

  it('should contain company start, end date at small tag', () => {
    cy.get('small').should('contain', FIRST_EXPERIENCE.startDate).and('contain', FIRST_EXPERIENCE.endDate);
  });

  it('should render company position', () => {
    cy.contains(FIRST_EXPERIENCE.position).should('be.visible');
  });

  it('should render company description', () => {
    cy.contains(FIRST_EXPERIENCE.description).should('be.visible');
  });

  const FIRST_PROJECT = FIRST_EXPERIENCE.projects[0];

  it('should render first project title with level 3 heading', () => {
    cy.get('h3').should('contain', FIRST_PROJECT.title.text);
  });

  it('should contain project start, end date at small tag', () => {
    cy.get('small').should('contain', FIRST_PROJECT.startDate).and('contain', FIRST_PROJECT.endDate);
  });

  it('should render project description', () => {
    cy.contains(FIRST_PROJECT.description).should('be.visible');
  });

  it('should render which elements', () => {
    if (FIRST_PROJECT.which.length <= 0) {
      return;
    }

    FIRST_PROJECT.which.forEach(whichElem => {
      cy.contains(whichElem).should('exist');
    });
  });

  it('should render tech stack elements', () => {
    if (typeof FIRST_PROJECT.techStack === null) {
      return;
    }

    if (FIRST_PROJECT.techStack.length <= 0) {
      return;
    }

    FIRST_PROJECT.techStack.forEach(techStackElem => {
      cy.contains(techStackElem).should('exist');
    });
  });
});
