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
  })

  it('User should be able to only see product feedbacks with "suggestion" status', () => {
    cy.wait(['@getProductFeedbacks'])
  })

  it('User should be able to see the product feedback list ordererd by upvote score', () => {
    cy.wait(['@getProductFeedbacks'])
  })
})
