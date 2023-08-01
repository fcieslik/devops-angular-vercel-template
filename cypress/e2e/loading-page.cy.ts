/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://localhost:5173/');
  });

  it('should show some gibberish stuff from ng template', () => {
    cy.get('.new').contains('New Component');
    cy.get('.material').contains('Angular Material');
  });
});
