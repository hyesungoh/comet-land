describe('root - main', { testIsolation: false }, () => {
  it('should render level 3 heading inside of main', () => {
    cy.visit('/');
    cy.get('main').find('h3').should('exist');
  });

  it('should have anchor inside of main first article', () => {
    cy.get('main').get('article').first().find('a').should('exist');
  });

  it('should have small inside of main first article', () => {
    cy.get('main').get('article').first().find('small').should('exist');
  });

  it('should have anchor inside of small', () => {
    cy.get('main').get('article').first().find('small').find('a').should('exist');
  });
});
