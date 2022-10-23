const singleMovieJSON = {
  "movie": {
  "id": 694919,
  "title": "Money Plane",
  "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
  "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
  "release_date": "2020-09-29",
  "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
  "genres": [
  "Action"
  ],
  "budget": 0,
  "revenue": 0,
  "runtime": 82,
  "tagline": "lalala",
  "average_rating": 6.875
  }
}

describe('RANCID', () => {
  beforeEach( () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919", {statusCode: 201, body: singleMovieJSON})
  })

  it('should load the movie details page when the user clicks on a movie card', () => {
    cy.visit("localhost:3000").get('a[class="movie-card"]').first().click().url().should("include", "/694919")
  })
  
  it("Should see the title of the movie", () => {
    cy.visit("localhost:3000").get('a.movie-card').first().click()
    cy.contains("Money Plane");
  });

  it("Should have a movie overview", () => {
    cy.get('.overview')
    cy.contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.");
  })

  it("Should have a movie release date, genre/genres, and a rating", () => {
    cy.get('.release-date > b')
    cy.contains("09/29/2020");
    cy.contains("Action");
    cy.contains("6 / 10");
  })

  it("Should have button to go back to the home page", () => {
    cy.get('a').should('have.attr', 'href', '/').click().url().should('include', 'http://localhost:3000/')
  });
})