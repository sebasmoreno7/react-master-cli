import React, { Component } from 'react';
import { randomInRange } from '../__config/utils';

const activities = [
    'Aprender con deBakatas',
    'Bailar con dos pies izquierdos',
    'Cantar mientras se ducha',
    'Comer hot-dogs con piña',
    'Comerse el pan a medianoche',
    'Desarrollar código con bugs',
    'Descargar series de Netflix',
    'Dictar clases a media noche',
    'Escuchar música a todo volumen',
    'Investigar sobre conspiraciones',
    'Jugar stop con sus amigos',
    'Lavar la loza y limpiar la estufa',
    'Leer comics a escondidas',
    'Mover un div 1px hacia arriba',
    'Pasear los perros en chanclas',
    'Ver videos de gatos comiendo helado',
];

class Student extends Component {
    state = {
        selected: 0,
    };

    componentDidMount() {
        this.changeActivity();
    }

    changeActivity = () => {
        this.setState({ selected: randomInRange(activities.length - 1) });
    };

    render() {
        return (
            <li className="student">
                <h2>
                    A <span className="name">{this.props.name}</span> le encanta
                </h2>
                <small>{activities[this.state.selected]}</small>
                <button type="button" onClick={this.changeActivity}>
                    Cambio
                </button>
            </li>
        );
    }
}

export default Student;
