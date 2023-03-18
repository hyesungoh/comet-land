describe('slug - header', { testIsolation: false }, () => {
  it('should linkable to slug', () => {
    cy.visit('/');
    cy.get('main').find('a').first().click();
    cy.url().should('not.eq', Cypress.config().baseUrl);
  });

  it('should render level 3 heading inside of header', () => {
    cy.get('header').find('h3').should('exist');
  });

  const THEME_SWITCH_LABEL = 'theme switch';
  const GET_THEME_SWITCH_BY_LABEL = `[aria-label="${THEME_SWITCH_LABEL}"]`;

  it('should render theme toggle switch and kbar button at inside of header', () => {
    cy.get('header').within(() => {
      cy.get(GET_THEME_SWITCH_BY_LABEL).should('exist');

      cy.get('button').should('exist');
    });
  });

  it('should toggle theme when click theme toggle switch', () => {
    cy.get('body').then($body => {
      const currentBgColor = $body.css('background-color');

      cy.get('header').find(GET_THEME_SWITCH_BY_LABEL).click();
      cy.get('body').should('have.css', 'background-color').and('not.eq', currentBgColor);
    });
  });

  it('should render kbar menu when click kbar button', () => {
    cy.get('header').find('button').click();

    cy.get('input').should('be.visible');
  });
});
