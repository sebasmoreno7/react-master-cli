import React, { useState } from 'react';
import up from '../img/up.svg';
import down from '../img/down.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';

const Movie = ({ movie }) => {
    const [vote, setVote] = useState(null);

    return (
    <li>
        <figure>
            <img
                src={movie.cover}
                alt={`Cover of ${movie.name}`}
                className="cover"
            />
            <div className="content">
                <div className="title">
                    <h2>{movie.name} ({movie.year})</h2>
                    <button type="button" aria-label={`Vote up for ${movie.name}`} disabled={vote !== null} onClick={() => setVote('up')}>
                        <img src={up} alt="Vote up" />
                    </button>
                    <button type="button" aria-label={`Vote down for ${movie.name}`} disabled={vote !== null} onClick={() => setVote('down')}>
                        <img src={down} alt="Vote down" />
                    </button>
                    {vote && <img src={vote === 'up' ? like : dislike} alt={vote === 'up' ? 'Liked' : 'Disliked'} />}
                </div>
                {movie.score != null && <small>IMDB <span>{movie.score}/10</span></small>}
                <figcaption>
                    {movie.description}
                </figcaption>
            </div>
        </figure>
    </li>
    );
};

export default Movie;
