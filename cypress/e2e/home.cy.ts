
// Cypress E2E Test
describe('Navigation', () => {

  it('should have data dashboard title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2').contains('Planet Data Dashboard')
  })


  it('should load Translation vs Orbit chart', () => {
    cy.visit('http://localhost:3000/')
    cy.get('canvas[title="Translation vs Orbit"')
  })

  it('should load a sidebar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('aside')
  })

  it('should visit planet venus by link on sidebar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('aside  a[title="Visit Venus"').click()
    cy.location('href').should('eq', 'http://localhost:3000/planet/venus');
  })

})
  
// Prevent TypeScript from reading file as legacy script
export {}