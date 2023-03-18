describe('slug - main', { testIsolation: false }, () => {
  it('should linkable to slug', () => {
    cy.visit('/');
    cy.get('main').find('a').first().click();
    cy.url().should('not.eq', Cypress.config().baseUrl);
  });

  it('should have level 1 heading', () => {
    cy.get('h1').should('exist');
  });

  it('should exist category link at main', () => {
    cy.get('main').find('p').first().find('a').should('exist');
  });

  it('should exist article at inside of main', () => {
    cy.get('main').find('article').should('exist');
  });

  it('should render TOC when width size over 1000', () => {
    cy.viewport('macbook-13');
    cy.get('aside').should('exist');
  });

  it('should not render TOC when width size under 1000', () => {
    cy.viewport('iphone-xr');
    cy.get('aside').should('not.exist');
  });
});
