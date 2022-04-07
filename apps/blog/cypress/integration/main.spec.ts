import { baseUrl } from '../config';

describe('Main - Navigation', () => {
  it('should navigate to the root page', () => {
    cy.visit(baseUrl);
    cy.get('h1').click();
    cy.url().should('eq', baseUrl);
  });
});
