import React, { Component } from 'react';
import './style.css';

const show = '/show.png';
const betty = '/betty.png';
const midnight = '/midnight-gospel.png';
const good = '/the-good-place.png';
const twilight = '/twilight-zone.png';

const options = [show, betty, midnight, twilight, good];

// Creamos una clase usando como base React.Componente
// para tener todo el uso
class App extends Component {
    state = {
        on: '',
    };

    // Creamos un metodo en nuestra clase
    turnTvOn = () => {
        // El estado no lo debes modificar directamente
        // Usamos el metodo de los componentes "setState"
        console.log('Oprimieron el boton de prender tele');

        if (this.state.on === '') {
            console.log('Prendo la tele');
            this.setState({ on: show });
        } else {
            console.log('la tele ya esta prendida, no hago nada ');
        }
        // Le enviamos un objeto, con las propiedades que
        // queremos reemplazar
    };

    changeShow = () => {
        console.log('Cambiaron el canal');

        const indice = Math.floor(Math.random() * options.length);

        const newOption = options[indice];

        if (newOption !== this.state.on) {
            console.log('Cambio el canal');
            this.setState({
                on: newOption,
            });
        } else {
            console.log('no es necesario cambiarlo, salio el mismo');
        }
    };

    // Aquí es donde tendremos nuestro JSX
    // este metodo ya esta pre-establecido
    // en lo qué es un componente
    render() {
        console.log('Me renderizaron', Math.random());

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