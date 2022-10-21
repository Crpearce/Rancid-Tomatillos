import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ id, title, posterPath }) => {
  return (
    <Link to={`/${id}`} key={id} className="movie-card">
        <img src={posterPath} alt={title} />
        <h3 className="movie-title">{title}</h3>
    </Link>
  );
};

export default MovieCard;


