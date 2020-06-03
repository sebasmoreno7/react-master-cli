import React from 'react';

import moon from './img/moon.svg';
import sun from './img/sun.svg';

import './style.css';

const App = () => (
    <main className="night day">
        <label className="toggle" htmlFor="dabox">
            <input type="checkbox" id="dabox" />
            <span className="slider" />
        </label>
        <img src={sun} alt="Sun" />
        <img src={moon} alt="Moon" />

        <h2>zZzZzZz...</h2>
    </main>
);

export default App;
