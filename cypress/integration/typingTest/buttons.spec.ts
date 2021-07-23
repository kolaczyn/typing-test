/// <reference types="cypress" />

describe('Timer button and restart button', () => {
  const homePageUrl = 'http://localhost:3000';
  const timerButtonSelector = 'button[aria-label=timer-button]';
  const restartButtonSelector = 'button[aria-label=restart-button]';
  const inputSelector = 'input[aria-label=typing-test-input-field]';

  beforeEach(() => {
    cy.visit(homePageUrl);
  });

  it('toggles visibility of current time', () => {
    cy.get(timerButtonSelector).contains(60).should('exist');
    cy.get(timerButtonSelector).click();
    cy.get(timerButtonSelector).contains(60).should('not.exist');
  });

  it('restarts the test', () => {
    cy.get(timerButtonSelector).contains(60).should('exist');

    cy.get(inputSelector).type('hello');
    cy.get(inputSelector).should('have.value', 'hello');
    cy.get(restartButtonSelector).click();
    cy.get(inputSelector).should('have.value', '');
  });

  it('checks if the restart button restarts the time', () => {
    const initialTime = 60;
    const secondsToWait = 2;
    cy.get(timerButtonSelector).contains(initialTime).should('exist');

    cy.get(inputSelector).type('ye');

    cy.wait(secondsToWait * 1000);

    cy.get(timerButtonSelector).contains(initialTime - secondsToWait);
  });
});
