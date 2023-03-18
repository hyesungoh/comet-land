describe('root - store restoration', { testIsolation: false }, () => {
  it('should restore scroll position when reload', () => {
    const SCROLL_Y_POSITION = 30;

    cy.visit('/');
    cy.wait(1000);
    cy.window().then($window => {
      $window.scrollTo(0, SCROLL_Y_POSITION);
    });

    cy.reload();
    cy.wait(2000);

    cy.window().its('scrollY').should('not.eq', 0);
  });
});
