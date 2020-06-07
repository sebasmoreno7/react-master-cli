import React from 'react';
import up from '../img/up.svg';
import down from '../img/down.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';

const Movie = ({ name, score, description, year, cover, status }) => (
    <li>
        <figure>
            <img
                src={cover}
                alt={`Cover of ${name} - ${year}`}
                className="cover"
            />
            <div className="content">
                <div className="title">
                    <h3>
                        {name} ({year})
                    </h3>
                    {!status ? (
                        <>
                            <button type="button">
                                <img src={up} alt="Vote up" />
                            </button>
                            <button type="button">
                                <img src={down} alt="Vote down" />
                            </button>
                        </>
                    ) : (
                        <img
                            src={status === 'like' ? like : dislike}
                            alt="Like status"
                        />
                    )}
                </div>
                {score && (
                    <small>
                        IMDB <span>{score}/10</span>
                    </small>
                )}

                <figcaption>{description}</figcaption>
            </div>
        </figure>
        <button type="button" className="delete">
            ❌
        </button>
    </li>
);

export default Movie;
