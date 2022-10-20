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
  })

  it.skip('click a movie and see the movie details', () => {

  })

  it.skip('should display movie details and no other movies will be displayed', () => {

  })

  it.skip('should have a way to return to the main view of all movies', () => {

  })





})
  