export {};

describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:3000/')
  })
})
