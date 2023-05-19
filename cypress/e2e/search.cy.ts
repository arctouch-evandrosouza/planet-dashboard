
// Cypress E2E Test
describe('Navigation', () => {

  it('should search to the planet Mars', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('Mars')
    cy.get('button').click()
    cy.get('h4').contains('Mars')
  }) 

  it('should search to the planet Jupiter and should have seven planets on see more section', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('Jupiter')
    cy.get('button').click()
    cy.get('h4').contains('Jupiter')
    cy.get('#see-more').find('section').should('have.length', 7)
  })

  it('should open Saturn after search Jupiter', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('Jupiter')
    cy.get('button').click()
    cy.get('div#see-more section div a[title="See more about Saturn"').click()
    cy.get('h4').contains('Saturn')
  })
})

  
// Prevent TypeScript from reading file as legacy script
export {}