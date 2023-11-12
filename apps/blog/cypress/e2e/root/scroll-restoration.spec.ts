// NOTE: https://github.com/cypress-io/cypress/issues/14857

// describe('root - store restoration', { testIsolation: false }, () => {
//   it('should restore scroll position when go back', () => {
//     const SCROLL_Y_POSITION = 30;

//     cy.visit('/');
//     cy.window().then($window => {
//       $window.scrollTo(0, SCROLL_Y_POSITION);
//     });

//     cy.get('main').find('a').first().click();

//     cy.go('back', { timeout: 10000 });

//     cy.window().its('scrollY').should('not.eq', 0);
//   });
// });
