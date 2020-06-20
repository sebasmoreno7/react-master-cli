import React from 'react';
import up from '../img/up.svg';
import down from '../img/down.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';
import movies from '../data/movies.js';

const Movie = (props) => (
    
   <li>
        {props.list.map((props) => ( 
        <figure>
            <img
                src={props.cover}
                alt="Cover of Titulo - 1999"
                className="cover"
            />
            <div className="content">
                <div className={props.name}>
                    <h2>Titulo (1999)</h2>
                    <button type="button">
                        <img src={up} alt="Vote up" />
                    </button>
                    <button type="button">
                        <img src={down} alt="Vote down" />
                    </button>
                    <img src={like} alt="Like status" />
                </div>
                <small>
                    IMDB <span>0.0/10</span>
                </small>
                <figcaption>
                    {props.description}
                </figcaption>
            </div>
        </figure>
        ))}
    </li>
    
);

export default Movie;
