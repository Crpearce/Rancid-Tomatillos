import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import movieData from '../movieData/movieData'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    console.log(this.state.movies)
    return (
      <main className='App'>
        <h1>Rotten Tomatillos</h1>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;

