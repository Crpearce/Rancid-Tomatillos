describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should load main page title', () => {
    cy.get('Nav').contains('Rancid')
    cy.get('Nav').contains('Tomatillos')
  })

  it('should display all movies when page loads by fetching all movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies'})
    cy.get('main').children('div').contains('Mulan')
    cy.get('main').children('div').contains('Mars Attacks').should('not.exist')
  })
  // it.skip('should display error message if api fails', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', 'local')
  // })

  it('should click a movie poster and see additional movie details', () => {
    cy.get('.movie-card').first().click()
    cy.url().should('include', '/694919')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'movie'})
  })
})

  describe('Movie Details', () => {
    beforeEach(() => {
      // cy.visit('http://localhost:3000')
      // cy.get('.movie-card').first().click()
      // cy.url().should('include', '/694919')
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'movie'})
    })

  it('should display movie details and no other movies will be displayed', () => {
    cy.get('Nav').contains('Rancid')
    cy.get('Nav').contains('Tomatillos')
  })
  it('should display all movie details', () => {
    cy.get('.movie-details').get('.movie-overview').contains('A professional')
    // cy.get('.movie-overview').should('be.visible')
    // cy.get('.movie-details').contains("A professional")
  })

  it.skip('should have a home button to return to the main view of all movies', () => {

  })

})
  