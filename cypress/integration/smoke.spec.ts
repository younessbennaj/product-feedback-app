describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/')
    cy.findByText('Hello World!').should('exist')
    cy.findByRole('button', { name: 'click me' }).should('exist')
  })
})
