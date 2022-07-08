import { data as headerData } from '../../_content/Header';

describe('Main', () => {
  it('should display header datas heading', () => {
    cy.visit('/');
    cy.get('h1').contains(headerData.heading);
  });
});
