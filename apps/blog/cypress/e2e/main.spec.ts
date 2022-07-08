describe('Main - Navigation', () => {
  it('should navigate to the root page', () => {
    cy.visit('/');
    cy.get('h1').click();
    cy.url().should('eq', Cypress.config().baseUrl);
  });
});
