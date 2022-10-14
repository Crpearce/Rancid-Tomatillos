import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
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

  clearMovieDetails = () => {
    this.setState({ singleMovie: null})
  }

  render() {
    let display;
    if(this.state.error) {
      display = <h2 className="error-message">{this.state.error}</h2>;
    } else if(this.state.singleMovie) {
      display = (
        <MovieDetails
        key={this.state.singleMovie.id}
        id={this.state.singleMovie.id}
        title={this.state.singleMovie.title}
        poster={this.state.singleMovie.poster_path}
        backdrop={this.state.singleMovie.backdrop_path}
        rating={this.state.singleMovie.average_rating}
        release={this.state.singleMovie.release_date}
        clearMovieDetails={this.clearMovieDetails}
        />
        )
      } else { 
        display = (<Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>)
      }
    return (
      <main className='App'>
        <h1>Rotten Tomatillos</h1>
        {display}
      </main>
    )
  }
}

export default App;