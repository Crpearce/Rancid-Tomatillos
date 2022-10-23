import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import dayjs from 'dayjs';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "./MovieDetails.css";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: {},
      trailer: '',
      error: "",
    };
  }

  componentDidMount() {
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
        console.log(this.state.trailer)
      })
      .catch((error) => this.setState({ error: error.message }));

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
  }


  render() {
      return (
        <div className="movie-details-container" key={this.state.singleMovie.id}>
          <div className="movie-card-container">
            <section className='movie-details'>
              <img className="image" src={this.state.singleMovie.backdrop_path} alt={this.state.singleMovie.title}/>
              <h2 className="title">{this.state.singleMovie.title}</h2>
              <p className="overview">{this.state.singleMovie.overview}</p>
              <p className="release-date"><b>{dayjs(this.state.singleMovie.release_date).format("MM/DD/YYYY")} | {this.state.singleMovie.genres}</b></p>
              <p className="rating"><b>{parseInt(this.state.singleMovie.average_rating)} / 10</b> </p>
            </section>
          </div>
          <section className="movie-trailer-container">
            {/* <div className='movie-trailer'> */}
              <iframe
              src={`https://www.youtube.com/embed/${this.state.trailer.key}`}
              frameBorder='0'
              title="Embedded youtube"
              width='80%'
              ></iframe>
            {/* </div> */}
          </section>
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
        </div>
      );
    }
  }
// }

export default MovieDetails;