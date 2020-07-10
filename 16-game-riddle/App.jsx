import React, { Component } from 'react';
import './style.css';
import Boat from './Boat';
import Island from './Island';
import images from './images';

/* eslint-disable no-constant-condition */

const initialState = {
    boat: '',
    left: ['knight', 'dragon', 'goat'],
    right: [],
    side: 'left',
    status: '', // win/lose
};

class App extends Component {
    state = initialState;

    componentDidMount() {
        // if (false) {
        //     // agrega tu validacion
        //     // logica para hacer ganar al usuario
        //     this.setState({
        //         status: 'win' || 'lose', // haz ganar o perder al usuario
        //     });
        // }

        if (this.state.status) {
            // si el usuario gano/perdio
            // luego de 3 segundos, reiniciemos el juego
            setTimeout(() => {
                console.log('Reiniciando el juego');

                this.setState(initialState);
            }, 3000);
        }
    }

    changeItem = (item) => {
        // agregar/remover del bote
        // desde/hacia isla
        console.log('Cambiando a ', item);
    };

    moveBoat = () => {
        // si esta en la derecha, lo muevo a la izquierda
        console.log('Moviendo el bote de', this.state.side);
    };

    render() {
        const { moveBoat, changeItem } = this;
        const { status, side, boat, left, right } = this.state;

        return (
            <>
                <main>
                    {status && (
                        <h1>{status === 'win' ? 'Ganaste' : 'Perdiste'}</h1>
                    )}

                    <Boat side={side} moveBoat={moveBoat}>
                        <button type="button" onClick={() => changeItem(boat)}>
                            <img
                                className={`${boat} boat-item`}
                                src={images[boat]}
                                alt={boat}
                            />
                        </button>
                    </Boat>
                    <Island changeItem={changeItem} items={left} />
                    <Island changeItem={changeItem} items={right} opposite />
                </main>
                <footer></footer>
            </>
        );
    }
}

export default App;
