import React from 'react';
import NavBar from './NavBar';
import SpaceX from './SpaceX';
import Nasa from './Nasa';
import RosCosmos from './RosCosmos';
import Home from './Home';

const App = () => (
    <div className="app">
        <NavBar />
        <main>
            <Home />
            {/* <SpaceX /> */}
            {/* <Nasa /> */}
            {/* <RosCosmos /> */}
        </main>
    </div>
);

export default App;
