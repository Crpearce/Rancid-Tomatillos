import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({details}) => {
        console.log(details)
    // const releaseYear = details.release_date.split('-')[0]
    // const allGenres = details.genres.map(genre => ` ${genre} `)
    // need to try and fix these two variables above, for some reason these are triggering 
    // an error when the user clicks on a single video. find a way to access the data now
    // that we are passing in that details object
    return (
        <div className='movie-details' key={details.id}>
            <h2 className='movie-details-title'>{details.title}</h2>
            <img className='movie-details-image' src={details.poster_path} alt={details.title} />
            <p className='movie-overview'>{details.overview}</p>
            <p className='extra-movie-details'>{details.release_date}</p>
            <p className='rating'>{details.average_rating}</p>
        </div>
    )
}

export default MovieDetails
