/// <reference types="cypress" />
import chaiColors from 'chai-colors';
chai.use(chaiColors);
import darkTheme from '../../../src/static/themes/darkTheme';
import lightTheme from '../../../src/static/themes/lightTheme';
import killItWithFire from '../../../src/static/themes/killItWithFire';

describe('Settings: change theme', () => {
  const homePageUrl = 'http://localhost:3000';
  // const darkTheme = require('../../../src/static/themes/darkTheme')
  const visitSubpage = (subpage: string) =>
    cy.visit(`${homePageUrl}${subpage}`);

  it('correctly changes theme', () => {
    visitSubpage('/settings');

    const themeNameBackground: { name: RegExp; background: string }[] = [
      { name: /dark theme/i, background: darkTheme.palette.background },
      { name: /light theme/i, background: lightTheme.palette.background },
      {
        name: /kill it with fire/i,
        background: killItWithFire.palette.background,
      },
    ];

    themeNameBackground.forEach(({ name, background }) => {
      cy.contains(name).click();
      cy.get('[data-test-id=body]')
        .should('have.css', 'background-color')
        .and('be.colored', background);
    });
  });
});
