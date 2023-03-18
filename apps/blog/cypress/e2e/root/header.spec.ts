describe('root - header', { testIsolation: false }, () => {
  it('should has header', () => {
    cy.visit('/');
    cy.get('header').should('be.visible');
  });

  it('should navigate to root when click lever 1 heading', () => {
    cy.get('h1').click();
    cy.url().should('eq', Cypress.config().baseUrl);
  });

  const THEME_SWITCH_LABEL = 'theme switch';
  const GET_THEME_SWITCH_BY_LABEL = `[aria-label="${THEME_SWITCH_LABEL}"]`;

  it('should visible theme toggle switch at header', () => {
    cy.get('header').within(() => {
      cy.get(GET_THEME_SWITCH_BY_LABEL).should('be.visible');
    });
  });

  it('should toggle theme when click theme toggle switch', () => {
    // NOTE: visit with prefer white mode
    cy.visit('/', {
      onBeforeLoad: win => {
        cy.stub(win, 'matchMedia')
          .withArgs('(prefers-color-scheme: dark)')
          .returns({ matches: true, addListener: () => {}, removeListener: () => {} });
      },
    });

    cy.get('body').then($body => {
      const firstBackgroundColor = $body.css('background-color');
      cy.wait(1000);
      cy.get(GET_THEME_SWITCH_BY_LABEL).click();

      cy.wait(1000);
      cy.get('body').should('have.css', 'background-color').and('not.eq', firstBackgroundColor);
    });
  });

  it('should visible kbar button at header', () => {
    cy.get('header').within(() => {
      cy.get('button').should('be.visible');
    });
  });

  it('should render kbar menu when click kbar button', () => {
    cy.get('header').find('button').click();

    cy.get('input').should('be.visible');
  });
});
