import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ id, onClick, title, posterPath }) => {
  return (
    <Link to={`/${id}`} key={id} className="movie-card" onClick={onClick}>
      {/* <div className="movie-card" onClick={onClick}> */}
        <img src={posterPath} alt={title} />
        <h3 className="movie-title">{title}</h3>
      {/* </div> */}
    </Link>
  );
};

export default MovieCard;


