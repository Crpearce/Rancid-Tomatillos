import React from 'react'
import './MovieCard.css'

const MovieCard = ({id, posterPath, backdropPath, title, averageRating, releaseDate}) => {
    return ( 
        <div className='movie-card'>
            <img src={posterPath} alt={title}/>
            <h3>{title}</h3>
            
        </div>
     );
}
 
export default MovieCard;