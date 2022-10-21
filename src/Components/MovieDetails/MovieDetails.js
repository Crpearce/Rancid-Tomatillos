import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({details}) => {
        console.log(details.genres)
    // const rating = details.average_rating.toFixed(0)
    // need to try and fix these two variables above, for some reason these are triggering 
    // an error when the user clicks on a single video. find a way to access the data now
    // that we are passing in that details object
    if (!details.genres) {
        return <h3>'Loading'</h3> 
    } else {

    return (
        <div className='movie-details' key={details.id}>
            <h2 className='movie-details-title'>{details.title}</h2>
            <img className='movie-details-image' src={details.poster_path} alt={details.title} />
            <p className='movie-overview'>{details.overview}</p>
            <p className='rating'>Rating: {details.average_rating.toFixed(0)} / 10</p>
            <p className='release-date'>{details.release_date.split('-')[0]}</p>
            <p className='movie-genres'>{details.genres.map(genre => ` ${genre} `)}</p>
        </div>
    )
}
}

export default MovieDetails


// can do fetch here!