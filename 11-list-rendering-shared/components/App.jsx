import React, { Component } from 'react';

import Movie from './Movie';
import movies from '../data/movies';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';
import reset from '../img/reset.svg';
/* eslint-disable */
class App extends Component {
    state = {
        movies,
    };

    changeMovieStatus = () => {
        // Aquí le podemos dar like/dislike a una pelicula
    };

    changeAllMovieStatuses = () => {
        // Podemos poner todas las peliculas en like/dislike
    };

    resetMovies = () => {
        // Podemos dejarlas en su estado inicial
    };

    render() {
        return (
            <main>
                <header>
                    <h1>Time Travel Movies</h1>
                    <button type="button">
                        <img src={like} alt="Vote up all" />
                    </button>
                    <button type="button">
                        <img src={reset} alt="Reset score" />
                    </button>
                    <button type="button">
                        <img src={dislike} alt="Vote down all" />
                    </button>
                </header>
                <h2>
                    <span>Liked</span>
                </h2>
                {/* Aqui queremos las que status === "like" */}
                <ul>
                    {this.state.movies.map((movie) => (
                        <Movie key={movie.name} />
                    ))}
                </ul>
                <hr />
                {/* Aqui queremos las que status === "" */}
                <ul>
                    {this.state.movies.map((movie) => (
                        <Movie key={movie.name} />
                    ))}
                </ul>

                <h2>
                    <span>Disliked</span>
                </h2>
                {/* Aqui queremos las que status === "dislike" */}
                <ul>
                    {this.state.movies.map((movie) => (
                        <Movie key={movie.name} />
                    ))}
                </ul>
            </main>
        );
    }
}

export default App;
