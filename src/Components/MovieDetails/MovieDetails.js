import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import "./MovieDetails.css";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: {},
      trailer: '',
      error: '',
    };
  }

  componentDidMount() {
    
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovieID}`
      )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error receiving Data");
        } else {
          return response.json();
        }
      })
      .then((response) => this.setState({ singleMovie: response.movie }))
      .catch((error) => this.setState({ error: error.message }));

        fetch(
          `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovieID}/videos`
          )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error receiving Data");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            this.setState({ trailer: data.videos[0] })
          })
          .catch((error) => this.setState({ error: error.message }));
    }

  render() {
    console.log(this.state.singleMovie)
      return (
        <div className="movie-details-container" key={this.state.singleMovie.id}>
              <img className="image" src={this.state.singleMovie.backdrop_path} alt={this.state.singleMovie.title}/>
          <div className="movie-card-container">
            <section className='movie-details'>
              <p className="other-details"> <b>{dayjs(this.state.singleMovie.release_date).format("MM/DD/YYYY")}</b> | <b>{this.state.singleMovie.runtime} Minutes</b> | <b>Rating: {parseInt(this.state.singleMovie.average_rating)}</b></p>
              <h2 className="title">{this.state.singleMovie.title}</h2>
              <p className="overview">{this.state.singleMovie.overview}</p>
            </section>
          </div>
          <section className="movie-trailer-container">
              <iframe
              src={`https://www.youtube.com/embed/${this.state.trailer.key}`}
              frameBorder='0'
              title="Embedded youtube"
              width='80%'
              ></iframe>
          </section>
          <Link to="/">
            <button className="home-button">Rancid Tomatillos</button>
          </Link>
        </div>
      );
    }
  }

export default MovieDetails;