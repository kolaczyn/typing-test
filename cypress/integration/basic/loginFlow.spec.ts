/// <reference types="cypress" />

import Chance from 'chance';
const chance = new Chance();
const homePageUrl = 'http://localhost:3000';
const visitSubpage = (subpage: string) => cy.visit(`${homePageUrl}${subpage}`);

const userCredentials: { email: string; password: string } = {
  email: chance.email(),
  password: chance.word({ length: 20 }),
};

describe('Login Flow', () => {
  it('can register, and it redirects to home page', () => {
    visitSubpage('/sign-up');

    cy.contains('log out', { matchCase: false }).should('not.exist');
    cy.contains('sign up', { matchCase: false }).should('exist');

    cy.get('input[type=email]').type(userCredentials.email);
    cy.get('input[type=password]').type(`${userCredentials.password}{enter}`);

    cy.contains('log out', { matchCase: false }).should('exist');
    cy.contains('sign up', { matchCase: false }).should('not.exist');

    cy.contains('Keystrokes');
    cy.contains('Net WPM');
  });

  it('can log out', () => {
    cy.contains('log out', { matchCase: false }).click();
    cy.contains('sign in', { matchCase: false });
  });

  it('can log in', () => {
    visitSubpage('/sign-in');

    cy.get('input[type=email]').type(userCredentials.email);
    cy.get('input[type=password]').type(`${userCredentials.password}{enter}`);

    cy.contains('log out', { matchCase: false }).should('exist');
    cy.contains('sign up', { matchCase: false }).should('not.exist');
  });

  it("doesn't log in user with wrong credentials", () => {
    cy.contains('log out', { matchCase: false }).click();
    visitSubpage('/sign-in');

    cy.get('input[type=email]').type(userCredentials.email);
    cy.get('input[type=password]').type(
      `${chance.word({ length: 19 })}{enter}`
    );

    cy.contains('The password is invalid or the user does not have a password');
    cy.contains('Sign In');
  });
});
