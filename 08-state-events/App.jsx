import React, { Component } from 'react';
import './style.css';

class App extends Component {
    state = {
        corinthians: 0,
        santos: 0,
    };

    aumente = (equipo) => {
        this.setState((prevState) => ({
            [equipo]: prevState[equipo] + 1,
        }));
    };

    disminuya = (equipo) => {
        this.setState((prevState) => ({
            [equipo]: prevState[equipo] - 1,
        }));
    };

    render() {
        return (
            <dl>
                <div className="corinthians">
                    <dd>{this.state.corinthians}</dd>
                    <dt>Corinthians</dt>
                    <button
                        type="button"
                        onClick={() => this.disminuya('corinthians')}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={() => this.aumente('corinthians')}
                    >
                        +
                    </button>
                </div>
                <img src="/ball.png" alt="soccer ball" />
                <div className="santos">
                    <dd>{this.state.santos}</dd>
                    <dt>Santos FC</dt>
                    <button
                        type="button"
                        onClick={() => this.disminuya('santos')}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={() => this.aumente('santos')}
                    >
                        +
                    </button>
                </div>
            </dl>
        );
    }
}

export default App;
