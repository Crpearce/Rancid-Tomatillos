import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Movies.css";

const Movies = ({ movies, displayMovieDetails }) => {
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        id={movie.id}
        posterPath={movie.poster_path}
        backdropPath={movie.backdrop_path}
        title={movie.title}
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
        key={movie.id}
        onClick = {() => displayMovieDetails(movie.id)}
        // pass in function to render movie video on click(use movie id to find)
      />
    );
  });
  return (
    <div className="movies-container">
        {movieCards}
    </div>
  )
};
export default Movies;