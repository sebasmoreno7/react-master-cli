import React, { Component } from 'react';
import './style.css';

class App extends Component {
    render() {
        return (
            <dl>
                <div className="corinthians">
                    <dd>00</dd>
                    <dt>Corinthians</dt>
                    <button type="button">-</button>
                    <button type="button">+</button>
                </div>
                <img src="/ball.png" alt="soccer ball" />
                <div className="santos">
                    <dd>00</dd>
                    <dt>Santos FC</dt>
                    <button type="button">-</button>
                    <button type="button">+</button>
                </div>
            </dl>
        );
    }
}

export default App;
