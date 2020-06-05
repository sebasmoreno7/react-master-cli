import React, { Component } from 'react';
import './style.css';

const show = '/show.png';
const betty = '/betty.png';
const midnight = '/midnight-gospel.png';
const good = '/the-good-place.png';
const twilight = '/twilight-zone.png';

// Creamos una clase usando como base React.Componente
// para tener todo el uso
class App extends Component {
    constructor(props) {
        // Enviamos info a super, es decir Component
        // para que pueda construir un React Component
        super(props);

        // Inicializamos el estado en el constructor
        this.state = { on: '' };

        // Conectamos los metodos para que apunten
        // siempre a nuestro componente
        this.turnTvOn = this.turnTvOn.bind(this);
    }

    // Creamos un metodo en nuestra clase
    turnTvOn() {
        // El estado no lo debes modificar directamente
        // Usamos el metodo de los componentes "setState"
        this.setState({ on: show });
        // Le enviamos un objeto, con las propiedades que
        // queremos reemplazar
    }

    // Aquí es donde tendremos nuestro JSX
    // este metodo ya esta pre-establecido
    // en lo qué es un componente
    render() {
        // Debemos hacer return del JSX
        return (
            <main>
                <figure>
                    <img className="show" src={this.state.on} alt="" />

                    <button type="button" onClick={this.changeShow}>
                        <img className="tv" src="/tv.png" alt="" />
                    </button>
                </figure>

                <button type="button" onClick={this.turnTvOn}>
                    Prende la TV
                </button>
            </main>
        );
    }
}

export default App;
