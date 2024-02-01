describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/page1');
  });
  it('has app title, shows proper command by default and reacts on command changes', () => {
    cy.contains('Page1');

    cy.contains('Info').click();

  })

  /* beforeEach(() => {
     cy.visit('/');
   });
 
   it('has app title, shows proper command by default and reacts on command changes', () => {
     cy.contains('cypress-e2e-testing-angular');
 
     cy.contains('.terminal', 'ng generate component xyz');
 
     cy.contains('Angular Material').click();
     cy.contains('.terminal', 'ng add @angular/material');
   });*/
});
