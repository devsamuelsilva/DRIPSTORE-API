describe('The Home Page', () => {
    it('successfully loads', () => {
    //   cy.request('/api/produto') // change URL to match your dev URL
    cy.request('/')
    .should('have.property', 'status', 200);
    })
  })