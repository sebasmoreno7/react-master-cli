import React from 'react';

import Movie from './Movie';
import movies from '../data/movies';

const App = () => (
    <main>
        <h1>Time Travel Movies</h1>
        <ul>
            {movies.map((movie) => (
                <Movie key={movie.name} movie={movie} />
            ))}
        </ul>
    </main>
);

export default App;
