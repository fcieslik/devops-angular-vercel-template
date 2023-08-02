/// <reference types="cypress" />

import { AppComponent } from '../../src/app/app.component';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show some gibberish stuff from ng template', () => {
    cy.get('.new').contains('New Component');
    cy.get('.material').contains('Angular Material');
  });
});
