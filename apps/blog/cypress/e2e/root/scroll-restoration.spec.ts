describe('root - store restoration', { testIsolation: false }, () => {
  it('should restore scroll position when go back', () => {
    const SCROLL_Y_POSITION = 30;

    cy.intercept('/').as('visitHome');
    cy.visit('/');
    cy.wait('@visitHome');

    cy.window().then($window => {
      $window.scrollTo(0, SCROLL_Y_POSITION);
    });

    cy.get('main').find('a').first().click();
    cy.wait(2000);
    cy.reload();

    cy.go('back');

    cy.window().its('scrollY').should('not.eq', 0);
  });
});
