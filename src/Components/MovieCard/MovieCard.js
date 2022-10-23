import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ id, title, posterPath }) => {
  return (
    <Link to={`/${id}`} key={id} className="movie-card">
        <img src={posterPath} alt={title} className='card-image'/>
        <h3 className="movie-title"><b>{title}</b></h3>
    </Link>
  );
};

export default MovieCard;


