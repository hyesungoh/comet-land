describe('root - store restoration', () => {
  it('should restore scroll position when reload', () => {
    const SCROLL_Y_POSITION = 200;

    cy.visit('/');
    cy.window().then($window => {
      $window.scrollTo(0, SCROLL_Y_POSITION);
    });

    cy.reload();
    cy.wait(2000);

    cy.window().its('scrollY').should('eq', SCROLL_Y_POSITION);
  });
});
