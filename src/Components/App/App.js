import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import movieData from '../movieData/movieData'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovie: null
    }
  }

  displayMovieDetails = (id) => {
    const currentMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({ singleMovie: currentMovie })
  }

  render() {
    console.log(this.state.movies)
    return (
      <main className='App'>
        <h1>Rotten Tomatillos</h1>
        <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails} />
      </main>
    )
  }
}

export default App;