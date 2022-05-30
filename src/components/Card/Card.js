import React from "react";
import PropTypes from 'prop-types';
import './card.css'

const Card = ({movie}) => {
    
    return (
        <div className="col-md-4">
            <div className="card m-2 rounded">
                <img src={movie.Poster} alt={movie.Title} className="card-img-top m-0" width="100%"/>
                <div className="card-body m-2">
                    <h3>{movie.Title}</h3>
                    <h4>{movie.Year}</h4>
                    <p>{movie.Type}</p>
                </div>
            </div>
        </div>
    )
}

Card.PropTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string,
    }).isRequired
}

export default Card