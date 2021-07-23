/// <reference types="cypress" />

describe('Switching Tabs', () => {
  const homePageUrl = 'http://localhost:3000';
  const visitSubpage = (subpage: string) =>
    cy.visit(`${homePageUrl}${subpage}`);

  visitSubpage('/settings');

  it('correctly toggle between tabs', () => {
    cy.contains(/change theme/i).click();
    cy.contains(/dark theme/i);

    cy.contains(/typing options/i).click();
    cy.contains(/set time/i);

    cy.contains(/account/i).click();
    cy.contains(/you are not logged in/i);
  });
});
