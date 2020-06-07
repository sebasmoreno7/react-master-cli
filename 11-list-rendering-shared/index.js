/*
    This file is the entry for the
    Webpack system to bundle all
    into a nice app :)
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './components/App';

// Import base styles so we don't mind about the rest
import '../__config/base.css';
import './css/style.css';

// This is necessary to the app reload without refreshing the whole page
const HotApp = hot(() => <App />);

// Get our App.jsx and mount it all into the #debakatas div
ReactDOM.render(<HotApp />, document.getElementById('debakatas'));
