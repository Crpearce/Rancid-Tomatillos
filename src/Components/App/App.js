import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import movieData from '../movieData/movieData'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  render() {
    console.log(movieData)
    return (
      <main className='App'>
        <h1>Rotten Tomatillos</h1>
      </main>
    )
  }
}

export default App;

