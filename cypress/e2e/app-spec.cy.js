describe('RANCID', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })

  it('should load main page title', () => {
    cy.get('Nav').get('h1').contains('Rancid')
    cy.get('Nav').get('h2').contains('Tomatillos')
  })

  it('should display all movies when page loads by fetching all movies', () => {
    cy.contains('Rancid Tomatillos')
      .url().should('include', '/')
      .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 201
      })
      .get('main').children('div').contains('Money Plane')
      .get('main').children('div').contains('Mulan')
      .get('main').children('div').contains('Mars Attacks').should('not.exist')
    })

    it('Should show an error message if the response is not ok', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 401
        })
        .get('h3').contains('Error loading page, please try again!')
    })

    it('should load all the movie cards that it gets data for (in this case, 40)', () => {
      cy.visit("localhost:3000/").get('a.movie-card').should('have.length', 40)
    })

    it('Should be able to click on a movie card and display that movie\'s details', () => {
      cy.get('.movie-card').first().click()
        .url().should('include', '/694919')
        .get('.movie-details').should('contain','Money Plane')
    })
  })


