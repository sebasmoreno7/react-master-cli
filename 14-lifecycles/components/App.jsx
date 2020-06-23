import React, { Component } from 'react';

import { pseudoFetch } from '../../__config/utils';
import CutTree from './CutTree';
import Form from './Form';
import Header from './Header';
import Trees from './Trees';

class App extends Component {
    constructor(props) {
        super(props);
        // Debemos iniciar el estado con el localStorage si existe
        this.state = {
            cutTree: {
                name: 'PenPen',
                time: 1592869197784,
            },
            trees: [
                {
                    name: 'Plantman',
                    kind: 'Anadenanthera peregrina',
                    link:
                        'https://en.wikipedia.org/wiki/Anadenanthera_peregrina',
                    location: {
                        latitude: 4.650505921557595,
                        longitude: -74.06906881237403,
                    },
                    created: 1592869197784,
                    browser: 'Mozilla',
                },
            ],
            ready: false,
        };
    }

    //
    componentDidMount() {
        // Vamos a cargar una información false
        pseudoFetch(true);
        // Cuando este la info, cambiamos el ready a true
    }

    componentDidUpdate() {
        // Aqui podemos cada que haya cambios los guardemos en el localstorage
    }

    createTree = () => {
        // Crea un arbol, ¿como lo harías?
        this.setState();
    };

    deleteTree = () => {
        // Borra un arbol, ¿como lo harías?
        this.setState();
    };

    render() {
        return (
            <>
                <Header />

                <Form trees={this.state.trees} createTree={this.createTree} />
                <Trees trees={this.state.trees} deleteTree={this.deleteTree} />

                {/*
                    Solo se debería mostrar si
                    hay algún arbol que haya sido eliminado
                */}
                <CutTree
                    name={this.state.cutTree.name}
                    time={this.state.cutTree.time}
                />
            </>
        );
    }
}

export default App;
