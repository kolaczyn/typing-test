/// <reference types="cypress" />

describe('Typing Test Input', () => {
  const homePageUrl = 'http://localhost:3000';
  const inputSelector = 'input[aria-label=typing-test-input-field]';

  beforeEach(() => {
    cy.visit(homePageUrl);
  });

  it('correctly types a word into the input', () => {
    cy.get(inputSelector).type('lorem');
    cy.get(inputSelector).should('have.value', 'lorem');
  });
  it("doesn't insert a space", () => {
    cy.get(inputSelector).type(' ');
    cy.get(inputSelector).should('have.value', '');

    cy.get(inputSelector).type('       ');
    cy.get(inputSelector).should('have.value', '');
  });
  it('correctly splits words after space press', () => {
    cy.get(inputSelector).type('lorem');
    cy.get(inputSelector).should('have.value', 'lorem');

    cy.get(inputSelector).type(' ');
    cy.get(inputSelector).should('have.value', '');

    cy.get(inputSelector).type('ipsum dolor');
    cy.get(inputSelector).should('have.value', 'dolor');
  });
});
