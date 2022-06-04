describe('Product feedback suggestion page', () => {
  beforeEach(() => {
    // Stubbing network call
    cy.intercept('GET', '/product-feedbacks', {
      fixture: 'product-feedbacks.json',
    }).as('getProductFeedbacks')

    // visit the suggestions page
    cy.visit('/')
  })

  it('User should be able to see the product feedback suggestions list', () => {
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
    const mockProductFeedbackWithSuggestionStatusCount = 6

    cy.wait(['@getProductFeedbacks'])

    // Expects suggestions list is composed only with product feedback
    // with "suggestion" status
    cy.findByRole('list', {
      name: /suggestions/i,
    }).within(() => {
      // Find by aria "listitem" role to query all the listitem under the list
      cy.findAllByRole('listitem')
        .its('length')
        .should('eq', mockProductFeedbackWithSuggestionStatusCount)
    })
  })

  it('User should be able to see the product feedback list ordered by upvote score', () => {
    const greatestUpvoteScore = 112

    cy.wait(['@getProductFeedbacks'])

    // Expects the first item in suggestions list should the greatest upvote score
    cy.findByRole('list', {
      name: /suggestions/i,
    }).within(() => {
      // Find by aria "listitem" role to query all the listitem under the list
      cy.findAllByRole('listitem')
        .first()
        .within(() => {
          cy.findByRole('button', { name: 'upvote' })
            .contains(greatestUpvoteScore)
            .should('exist')
        })
    })
  })

  it('User should be able to see product feedback informations on list items', () => {
    const category = 'Feature'
    const commentsCount = 2
    const description =
      'Stay updated on comments and solutions other people post.'
    const title = 'Ability to follow others'
    const upvoteScore = 42
    cy.wait(['@getProductFeedbacks'])

    // Expects the first item in suggestions list should the greatest upvote score
    cy.findByRole('list', {
      name: /suggestions/i,
    }).within(() => {
      // Find by aria "listitem" role to query all the listitem under the list
      cy.findAllByRole('listitem')
        // Get the 4th one
        .eq(3)
        .within(() => {
          cy.findByRole('heading', { level: 3, name: title })
          cy.findByText(description).should('exist')
          cy.findByRole('button', { name: 'upvote' })
            .contains(upvoteScore)
            .should('exist')
          cy.findByText(commentsCount).should('exist')
          cy.findByText(category).should('exist')
        })
    })
  })
})
