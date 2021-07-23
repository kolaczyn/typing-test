/// <reference types="cypress" />

describe('Typing Test', () => {
  const homePageUrl = 'http://localhost:3000';
  const inputSelector = 'input[aria-label=typing-test-input-field]';
  const textFieldSelector = '[aria-label=text-field]';

  const okayWordSelector = '[aria-label=word-okay]';
  const wrongWordSelector = '[aria-label=word-wrong]';

  beforeEach(() => {
    cy.visit(homePageUrl);
  });

  it('correctly detects if the first typed text is correct', () => {
    cy.get(textFieldSelector).then($elem => {
      const words = $elem.text().split(' ');
      const firstWord = words[0];
      cy.get(inputSelector).type(`${firstWord} `);
      cy.get(textFieldSelector).within(() => {
        cy.get(okayWordSelector).contains(firstWord);
      });
    });
  });
  it('correctly detects if the first typed text is wrong', () => {
    cy.get(textFieldSelector).then($elem => {
      const words = $elem.text().split(' ');
      const firstWord = words[0];
      cy.get(inputSelector).type(`おはよう世界 `);
      cy.get(textFieldSelector).within(() => {
        cy.get(wrongWordSelector).contains(firstWord);
      });
    });
  });
});
