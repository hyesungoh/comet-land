describe('root - store restoration', { testIsolation: false }, () => {
  it('should restore scroll position when go back', () => {
    const SCROLL_Y_POSITION = 30;

    cy.intercept('/').as('visitHome');
    cy.visit('/');
    cy.wait('@visitHome');

    cy.get('main').get('article').first().find('a').first().click();
    cy.intercept(/\/\w+/).as('visitArticle');
    cy.wait('@visitArticle');

    cy.window().then($window => {
      $window.scrollTo(0, SCROLL_Y_POSITION);
    });

    cy.go('back');
    cy.window().its('scrollY').should('not.eq', 0);
  });
});
