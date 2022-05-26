describe('Product feedback suggestion page', () => {
  beforeEach(() => {
    // Stubbing network call
    cy.intercept('GET', '/product-feedbacks', {
      fixture: 'product-feedbacks.json',
    }).as('getProductFeedbacks')

    // visit the suggestions page
    cy.visit('/')
  })

  it.only('User should be able to see the product feedback suggestions list', () => {
    // pass a Route Alias that forces Cypress to wait
    // until it sees a response for the request that matches this alias
    cy.wait(['@getProductFeedbacks'])

    // Expects suggestions list exist in the visited page
    // Find suggestions list by aria "list" role and by aria-label "suggestions" to ensure
    // good testing practice
    cy.findByRole('list', {
      name: /suggestions/i,
    }).should('exist')

    // Expects suggestions list to have list items within
    cy.findByRole('list', {
      name: /suggestions/i,
    }).within(() => {
      // Find by aria "listitem" role to query all the listitem under the list
      cy.findAllByRole('listitem').its('length').should('not.eq', 0)
    })
  })

  it('User should be able to only see product feedbacks with "suggestion" status', () => {
    cy.wait(['@getProductFeedbacks'])
  })

  it('User should be able to see the product feedback list ordererd by upvote score', () => {
    cy.wait(['@getProductFeedbacks'])
  })
})
