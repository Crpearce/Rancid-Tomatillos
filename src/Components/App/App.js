import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
// import movieData from '../movieData/movieData'
import Navigation from '../Navigation/Navigation'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      error: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error receiving Data')
        } else {
          return response.json()
        }
      })
      .then(data => { 
        console.log(data)
        this.setState({ movies: data.movies })})
      .catch(error => this.setState({error: 'Error loading page, please try again!'}))
  }

  displayMovieDetails = (id) => {
    const currentMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({singleMovie: currentMovie})
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${currentMovie.id}`)
    .then(response => response.json())
    .then(data => this.setState({ singleMovie: data.movie }))
  }


  clearMovieDetails = () => {
    this.setState({ singleMovie: null})
  }

  render() {
    // let display;
    // if(this.state.error) {
    //   display = <h2 className="error-message">{this.state.error}</h2>;
    // } else if(this.state.singleMovie) {
    //   display = (
    //     <MovieDetails
    //     key={this.state.singleMovie.id}
    //     id={this.state.singleMovie.id}
    //     title={this.state.singleMovie.title}
    //     poster={this.state.singleMovie.poster_path}
    //     backdrop={this.state.singleMovie.backdrop_path}
    //     rating={this.state.singleMovie.average_rating}
    //     release={this.state.singleMovie.release_date}
    //     clearMovieDetails={this.clearMovieDetails}
    //     overview={this.state.singleMovie.overview}
    //     releaseDate={this.state.singleMovie.release_date}
    //     runTime={this.state.singleMovie.runtime}
    //     genres={this.state.singleMovie.genres}
    //     />
    //     )
    //   } else { 
    //     display = (<Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails} />)
    //   }
    return (
      <main className='App'>
        <nav>
          <Navigation />
        </nav>
        <Route exact path="/" render={() => <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>} />
        <Route
          exact path="/:movieId"
          render={() => <MovieDetails details={this.state.singleMovie} />}
        />
      </main>
    )
  }
}

export default App;