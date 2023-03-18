import { data as headerData } from '../../../_content/Header';

describe('root - header', { testIsolation: false }, () => {
  it('should display level 1 heading at header', () => {
    cy.visit('/');
    cy.get('header').find('h1').should('be.visible');
  });

  it('should render header data at level 1 heading where inside of header', () => {
    cy.get('header').find('h1').should('contain', headerData.heading);
  });

  it('should display image at header', () => {
    cy.get('header').find('img').should('be.visible');
  });

  it('should display headerData description at header', () => {
    cy.get('header').find('p').should('be.visible');
  });

  const THEME_SWITCH_LABEL = 'theme switch';
  const GET_THEME_SWITCH_BY_LABEL = `[aria-label="${THEME_SWITCH_LABEL}"]`;

  it('should visible theme toggle switch at header', () => {
    cy.get('header').find(GET_THEME_SWITCH_BY_LABEL).should('be.visible');
  });

  it('should toggle theme when click theme toggle switch', () => {
    // it means prefer light theme and width greater than 650px
    cy.visit('/', {
      onBeforeLoad: win => {
        cy.stub(win, 'matchMedia').returns({ matches: true, addListener: () => {}, removeListener: () => {} });
      },
    });

    cy.get('body').then($body => {
      const firstBackgroundColor = $body.css('background-color');
      cy.wait(1000);
      cy.get(GET_THEME_SWITCH_BY_LABEL).click();

      cy.wait(1000);
      cy.get('body').should('have.css', 'background-color').and('not.eq', firstBackgroundColor);
    });
  });
});
