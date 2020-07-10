import React, { Component } from 'react';
import Filters from './Filters';
import Characteres from './Characteres';

class App extends Component {
    render() {
        return (
            <main>
                <h1>
                    <span>Cha</span>
                    <span>racters</span>
                </h1>
                <Filters />
                <Characteres />
            </main>
        );
    }
}

export default App;
