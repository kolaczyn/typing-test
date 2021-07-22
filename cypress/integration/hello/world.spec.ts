/// <reference types="cypress" />

describe('hello world', () => {
  const homePageUrl = 'http://localhost:3000';

  const visitSubpage = (subpage: string) =>
    cy.visit(`${homePageUrl}${subpage}`);

  beforeEach(() => {
    cy.visit(homePageUrl);
  });

  it('All the pages have a title', () => {
    const pageText: { page: string; text: string }[] = [
      { page: '/', text: 'Keystrokes' },
      { page: '/ranking', text: 'Ranking' },
      { page: '/settings', text: 'Settings' },
      { page: '/sign-in', text: 'Sign In' },
      { page: '/sign-up', text: 'Sign Up' },
    ];

    pageText.forEach(({ page, text }) => {
      visitSubpage(page);
      cy.contains(text);
    });
  });
});
