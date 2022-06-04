describe('Product feedback suggestion page', () => {
  beforeEach(() => {
    // Stubbing network call
    cy.intercept('POST', '/product-feedbacks', {
      fixture: 'new-product-feedback.json',
    }).as('postProductFeedbacks')

    // visit the suggestions page
    cy.visit('/')
    // Find and click on "add feedback" button
    cy.findByRole('button', { name: 'Add Feedback' }).click()
  })

  it.only('User should be redirected to product feedback suggestions form page after clicking on “add feedback” button', () => {
    cy.wait(['@getProductFeedbacks'])

    // Expects that the user is redirected to the product feedback suggestions form page url
    cy.location('pathname').should('eq', '/add-suggestion')

    // Expects that the product feedback suggestions form is include in the current page
    cy.findByRole('form', { name: 'Create New Feedback' }).within(() => {
      cy.findByRole('button', { name: 'Go Back' }).should('exist')
      cy.findByLabelText('Feedback Title').should('exist')
      cy.findByLabelText('Category').should('exist')
      cy.findByLabelText('Feedback Detail').should('exist')
      cy.findByRole('button', { name: 'Add Feedback' }).should('exist')
      cy.findByRole('button', { name: 'Cancel' }).should('exist')
    })
  })

  // it('User should not be able to submit the product feedback suggestions form until he fill all required form controls with the correct values', () => {})

  // it('User should be able to be redirected to the product feedback suggestions list when he click on the “back” button', () => {})

  // it('User should be able to be redirected to the product feedback suggestions list when he click on the “cancel” button', () => {})

  // it('User should be able to see his new product feedback suggestion into the suggestions list when he submit the form with the correct values', () => {})
})
