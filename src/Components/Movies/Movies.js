import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Movies.css";

const Movies = ({ movies}) => {
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