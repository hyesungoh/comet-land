describe('root - store restoration', { testIsolation: false }, () => {
  it('should restore scroll position when go back', () => {
    const SCROLL_Y_POSITION = 30;

    cy.visit('/');
    cy.wait(500);

    cy.get('main').get('article').first().find('a').first().click();
    cy.wait(500);

    cy.window().then($window => {
      $window.scrollTo(0, SCROLL_Y_POSITION);
    });

    cy.go('back');
    cy.wait(500);

    cy.window().its('scrollY').should('not.eq', 0);
  });
});
