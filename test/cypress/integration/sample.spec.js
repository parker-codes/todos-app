describe('Sample test', () => {
  it('Visits main page', () => {
    cy.visit('/');
    cy.contains('h1', 'TODOs');
  });
});
