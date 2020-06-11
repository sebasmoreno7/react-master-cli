import React from 'react';
import up from '../img/up.svg';
import down from '../img/down.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';

const Movie = () => (
    <li>
        <figure>
            <img
                src="/primer.jpg"
                alt="Cover of Titulo - 1999"
                className="cover"
            />
            <div className="content">
                <div className="title">
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam nisi expedita porro perspiciatis impedit sunt debitis
                    ratione iste quo voluptate assumenda repudiandae aperiam
                    quisquam, accusantium natus ipsam quidem dolorum quod.
                </figcaption>
            </div>
        </figure>
    </li>
);

export default Movie;
