import React from 'react';

import Movie from './Movie';
import { ProgressPlugin } from 'webpack';

const App = () => (
    <main>
        <h1>Time Travel Movies</h1>
        <ul>
            {movies.map((peli)=>
            <Movie />
            ) }
        </ul>
    </main>
);

export default App;
