/*
    This file is the entry for the
    Webpack system to bundle all
    into a nice app :)
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Get our App.jsx and mount it all into the #debakatas div
ReactDOM.render(<App />, document.getElementById('debakatas'));
