import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./MovieDetails.css";

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: {},
      trailers: [],
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
        this.setState({ trailers: data.videos });
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

  displayMovieTrailers = () => {
    let trailerVideos;
    this.state.trailers.forEach((trailer) => {
      if (trailer.site === "YouTube") {
        trailerVideos = this.state.trailers.map((video) => {
          return (
            <SwiperSlide className="swiper-slide" key={video.id}>
              <ReactPlayer
                className="video"
                controls={true}
                url={`https://www.youtube.com/watch?v=${video.key}`}
              />
            </SwiperSlide>
          );
        });
      } else if (trailer.site === "Vimeo") {
        trailerVideos = this.state.trailers.map((video) => {
          return (
            <SwiperSlide className="swiper-slide" key={video.id}>
              <ReactPlayer
                className="video"
                controls={true}
                url={`https://www.vimeo.com/${video.key}`}
              />
            </SwiperSlide>
          );
        });
      }
    });
    return trailerVideos;
  };

  render() {
    if (this.state.trailers.length < 1) {
      return (
        <div>
          <h3 className="movie-details">Loading....</h3>
        </div>
      );
    } else {
      return (
        <div className="movie-details" key={this.state.singleMovie.id}>
          <h2 className="movie-details-title">
            {this.state.singleMovie.title}
          </h2>
          <img
            className="movie-details-image"
            src={this.state.singleMovie.poster_path}
            alt={this.state.singleMovie.title}
          />
          <p className="movie-overview">{this.state.singleMovie.overview}</p>
          <p className="rating"><b>Rating:</b> {parseInt(this.state.singleMovie.average_rating)} / 10 </p>
          <p className="release-date"><b>Release date:</b> {this.state.singleMovie.release_date}</p>
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
          <section className="movie-trailers">
            <Swiper
              modules={[Pagination, Navigation, Mousewheel, Keyboard]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              keyboard={true}
              mousewheel={true}
              className="all-swiper-movies"
            >
              {this.displayMovieTrailers()}
            </Swiper>
          </section>
        </div>
      );
    }
  }
}

export default MovieDetails;
