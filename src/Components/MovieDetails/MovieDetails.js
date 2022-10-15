import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({id, title, poster, backdrop, rating, release, overview, releaseDate, runTime, genres, clearMovieDetails}) => {

    const releaseYear = releaseDate.split('-')[0]
    const allGenres = genres.map(genre => ` ${genre} `)
    
    // pass in the fetched single video as a prop, find the specific video by the matching ID
    return (
        <div className='movie-details'>
            <h2 className='movie-details-title'>{title}</h2>
            <img className='single-poster-img' src={poster} alt={ `poster from the movie ${title}`}
            />
            <p className='movie-overview'>{overview}</p>
            <p className='extra-movie-details'>{releaseYear} | {runTime}mins | {allGenres} </p>
            <p className='rating'><b>Rating:</b> {rating.toFixed(0)} out of 10</p>
            <button className="clear-movie-details" onClick={clearMovieDetails}>HOME</button>
        </div>
    )
}

export default MovieDetails
