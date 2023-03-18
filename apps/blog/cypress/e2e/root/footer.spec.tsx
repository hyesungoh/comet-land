describe('root - footer', { testIsolation: false }, () => {
  it('should render footer', () => {
    cy.visit('/');
    cy.scrollTo('bottom');
    cy.get('footer').should('exist').and('be.visible');
  });

  it('should have anchor at footer', () => {
    cy.get('footer').find('a').should('exist');
  });
});
