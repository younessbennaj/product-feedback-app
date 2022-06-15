describe('Product feedback suggestion page', () => {
  beforeEach(() => {
    // Stubbing network call
    cy.intercept('GET', '/product-feedbacks', {
      fixture: 'product-feedbacks.json',
    }).as('getProductFeedbacks')

    cy.intercept('POST', '/product-feedbacks', {
      fixture: 'new-product-feedback.json',
    }).as('postProductFeedbacks')

    // visit the suggestions page
    cy.visit('/')
    // pass a Route Alias that forces Cypress to wait
    // until it sees a response for the request that matches this alias
    cy.wait('@getProductFeedbacks')
    // Find and click on "add feedback" button
    cy.findByRole('button', { name: 'Add Feedback' }).click()
  })

  it('User should be redirected to product feedback suggestions form page after clicking on “add feedback” button', () => {
    // Expects that the user is redirected to the product feedback suggestions form page url
    cy.location('pathname').should('eq', '/add-suggestion')

    // Expects "go back" button to be include in the current page
    cy.findByRole('button', { name: 'Go Back' }).should('exist')

    // Expects "go back" button to be include in the current page
    cy.findByText('Create New Feedback').should('exist')

    // Expects that the product feedback suggestions form is include in the current page
    cy.findByRole('form', { name: 'suggestion-form' }).within(() => {
      cy.findByLabelText('Feedback Title').should('exist')
      cy.findByLabelText('Category').should('exist')
      cy.findAllByRole('option').its('length').should('eq', 5)
      cy.findByLabelText('Feedback Detail').should('exist')
      cy.findByRole('button', { name: 'Add Feedback' }).should('exist')
      cy.findByRole('button', { name: 'Cancel' }).should('exist')
    })
  })

  it('User should not be able to submit the product feedback suggestions form by default', () => {
    // Expects form submit button to be disabled
    cy.findByRole('form', { name: 'suggestion-form' }).within(() => {
      cy.findByRole('button', { name: 'Add Feedback' }).should('be.disabled')
    })
  })

  it('User should be able to be redirected to the product feedback suggestions list when he click on the “back” button', () => {
    cy.findByRole('button', { name: 'Go Back' }).click()

    // Expects that the user is redirected to the product feedback suggestions page url
    cy.location('pathname').should('eq', '/')
  })

  it('User should be able to be redirected to the product feedback suggestions list when he click on the “cancel” button', () => {
    cy.findByRole('form', { name: 'suggestion-form' }).within(() => {
      cy.findByRole('button', { name: 'Cancel' }).click()
    })

    // Expects that the user is redirected to the product feedback suggestions page url
    cy.location('pathname').should('eq', '/')
  })

  it('User should not be able to submit the product feedback suggestions form until he fill all required form controls with the correct values', () => {
    cy.findByRole('form', { name: 'suggestion-form' }).within(() => {
      // Expects submit button to be disabled after filling title
      cy.findByLabelText('Feedback Title').type('Add a localization option')
      cy.findByRole('button', { name: 'Add Feedback' }).should('be.disabled')

      // Expects submit button to be disabled after select category
      cy.findByLabelText('Category').select('Feature')
      cy.findByRole('button', { name: 'Add Feedback' }).should('be.disabled')

      // Expects submit button to not be disabled after filling category only
      cy.findByLabelText('Feedback Detail').type(
        'Provide a complete solution to translate wording'
      )
      cy.findByRole('button', { name: 'Add Feedback' }).should(
        'not.be.disabled'
      )
    })
  })

  it('User should be able to see form validation error message after visiting required field', () => {
    cy.findByRole('form', { name: 'suggestion-form' }).within(() => {
      // Expects submit button to be disabled after filling title
      cy.findByLabelText('Feedback Title')
        .type('Add a localization option')
        .clear()
        .blur()
      cy.findByRole('button', { name: 'Add Feedback' }).should('be.disabled')

      cy.findByText('Can’t be empty')
    })
  })

  it('User should be able to see his new product feedback suggestion into the suggestions list when he submit the form with the correct values', () => {
    cy.findByRole('form', { name: 'suggestion-form' }).within(() => {
      cy.findByLabelText('Feedback Title').type('Add a localization option')

      cy.findByLabelText('Category').select('Feature')

      cy.findByLabelText('Feedback Detail').type(
        'Provide a complete solution to translate wording'
      )

      cy.findByRole('button', { name: 'Add Feedback' }).click()
      cy.wait('@postProductFeedbacks')
    })

    // Expects that the user is redirected to the product feedback suggestions page url
    cy.location('pathname').should('eq', '/')

    // Expects new suggestion title and description to be include in the suggestions list
    cy.findByText('Add a localization option').should('exist')
    cy.findByText('Provide a complete solution to translate wording').should(
      'exist'
    )
  })
})
