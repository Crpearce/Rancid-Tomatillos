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
    cy.get('.movie').should('have.length', 40)
  })

  it.skip('should display error message if api fails', () => {

  })


  it.skip('click a movie poster and see the movie details', () => {

  })




  // Movie Details

  it.skip('should display movie details and no other movies will be displayed', () => {

  })

  it.skip('should display all movie details', () => {

  })

  it.skip('should have a home button to return to the main view of all movies', () => {

  })



 






})
  