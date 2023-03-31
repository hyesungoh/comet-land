describe('slug - comment', { testIsolation: false }, () => {
  it('should link to slug page', () => {
    cy.visit('/');
    cy.get('main').find('a').first().click();
    cy.url().should('not.eq', Cypress.config().baseUrl);
  });

  it('should render iframe within utterances class', () => {
    cy.wait(1000);
    cy.scrollTo('bottom');

    cy.get('.utterances').within(() => {
      cy.get('iframe').should('be.visible');
    });
  });

  it('should have one utterances class', () => {
    cy.get('.utterances').should('have.length', 1);
  });
});
