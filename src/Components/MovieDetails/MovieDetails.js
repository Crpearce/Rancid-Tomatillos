import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({id, title, poster, backdrop, rating, release, clearMovieDetails}) => {
    // pass in the fetched single video as a prop, find the specific video by the matching ID
    return (
        <div className='movie-details'>
            // need the video here too
            <img className='single-poster-img' src={poster} alt={ `poster from the movie ${title}`}
            />
            <h2>{title}</h2>
            <p>{rating}</p>
            <button className="clear-movie-details" onClick={clearMovieDetails}>HOME</button>
        </div>
    )
}

export default MovieDetails