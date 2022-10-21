import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './MovieDetails.css'

class MovieDetails extends Component {
    constructor() {
        super()
        this.state = {
            singleMovie: {}
        }
    }
    displayMovieDetails = (id) => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
        .then(data => this.setState({ singleMovie: data.movie }))
      }

      componentDidMount() {
        const id = this.props.id
        this.displayMovieDetails(id)
      }

    render() {
        return (
            <div className='movie-details' key={this.state.singleMovie.id}>
                <h2 className='movie-details-title'>{this.state.singleMovie.title}</h2>
                <img className='movie-details-image' src={this.state.singleMovie.poster_path} alt={this.state.singleMovie.title} />
                <p className='movie-overview'>{this.state.singleMovie.overview}</p>
                <p className='rating'><b>Rating:</b>  {parseInt(this.state.singleMovie.average_rating)} / 10</p>
                <p className='release-date'><b>Release date:</b> {this.state.singleMovie.release_date}</p>
                <Link to='/'>
                    <button className="home-button">Home</button>
                </Link>
            </div>
            )
        }
    }



export default MovieDetails;