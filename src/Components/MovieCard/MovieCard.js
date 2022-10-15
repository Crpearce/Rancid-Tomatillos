
import React from 'react'
import './MovieCard.css'

const MovieCard = ({id, posterPath, backdropPath, title, averageRating, releaseDate, onClick}) => {
    return ( 
        <div className='movie-card' onClick={onClick}>
            <img src={posterPath} alt={title}/>
            <h3>{title}</h3>    
        </div>
     );
}
 
export default MovieCard;