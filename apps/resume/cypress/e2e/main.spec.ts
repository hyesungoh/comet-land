import { data as headerData } from '../../_content/Header';
import { baseUrl } from '../config';

describe('Main', () => {
  it('should display header datas heading', () => {
    cy.visit(baseUrl);
    cy.get('h1').contains(headerData.heading);
  });
});
