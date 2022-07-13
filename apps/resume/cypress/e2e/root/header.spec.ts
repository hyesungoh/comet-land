import { data as headerData } from '../../../_content/Header';

describe('root - header', () => {
  it('should display level 1 heading at header', () => {
    cy.visit('/');
    cy.get('header').find('h1').should('be.visible');
  });

  it('should render header data at level 1 heading where inside of header', () => {
    cy.get('header').find('h1').contains(headerData.heading);
  });

  it('should display image at header', () => {
    cy.get('header').find('img').should('be.visible');
  });

  it('should display headerData description at header', () => {
    cy.get('header').find('p').should('be.visible');
  });
});
