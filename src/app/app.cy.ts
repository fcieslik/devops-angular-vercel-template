import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should show some gibberish stuff from ng template', () => {
    cy.mount(AppComponent);
    cy.get('.new').contains('New Component')
    cy.get('.material').contains('Angular Material')
  });
});
