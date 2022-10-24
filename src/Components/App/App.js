import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails'
import Navigation from '../Navigation/Navigation'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
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
        this.setState({ movies: data.movies })})
      .catch(error => this.setState({error: 'Error loading page, please try again!'}))
  }

  render() {
    return (
      <main className='App'>
        <Route path='/' render={() => <Navigation />}/>
        {(this.state.error && <h3 className="error-message">{this.state.error}</h3>)}
        <Route exact path="/" render={() => <Movies movies={this.state.movies} />} />
        <Route exact path="/:movieId" render={({ match }) => <MovieDetails singleMovieID={match.params.movieId}/>}
        />
      </main>
    )
  }
}

export default App;