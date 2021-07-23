/// <reference types="cypress" />

describe('Stat panes', () => {
  const homePageUrl = 'http://localhost:3000';
  const inputSelector = 'input[aria-label=typing-test-input-field]';
  const statPaneSelector = (statName: string) =>
    `[aria-label=stats-${statName}]`;

  beforeEach(() => {
    cy.visit(homePageUrl);
  });

  it('correctly counts keystrokes', () => {
    const textToWrite = '1234567890';
    cy.get(statPaneSelector('keystrokes')).children().contains(/^0$/);
    cy.get(inputSelector).type(textToWrite);
    cy.get(statPaneSelector('keystrokes'))
      .children()
      .contains(new RegExp(`^${String(textToWrite.length)}$`));
  });
});
