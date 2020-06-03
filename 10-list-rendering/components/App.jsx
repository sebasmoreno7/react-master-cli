import React from 'react';

import Movie from './Movie';
import movies from '../data/movies';

const App = () => (
    <main>
        <h1>Time Travel Movies</h1>
        <ul>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
        </ul>
    </main>
);

export default App;
