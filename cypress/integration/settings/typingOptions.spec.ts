/// <reference types="cypress" />

describe('Settings: typing options', () => {
  const homePageUrl = 'http://localhost:3000';
  const visitSubpage = (subpage: string) =>
    cy.visit(`${homePageUrl}${subpage}`);

  it('show error message on button on bad time', () => {
    visitSubpage('/settings');

    cy.contains(/typing options/i).click();
    cy.get('#time').type('9999');

    cy.contains(/the time is too long/i);

    cy.contains(/typing options/i).click();
    cy.get('#time').clear().type('-1');

    cy.contains(/the time cannot be negative/i);
  });
});
