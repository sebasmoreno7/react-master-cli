import React from 'react';
import './style.css';

const App = () => {
    const date = new Date().getFullYear();

    return (
            <main>
                <figure>
                    <h2>HTML</h2>
                    <img src="../public/doge.png" alt="doge" >
                    <figcaption>
                        Hay 345 errores pero voy a renderizar lo que entiendo
                    </figcaption>
                </figure>
                <figure>
                    <h2>JSX</h2>
                    <img src="../public/cheems.png" alt="cheems" class="small" >
                    <figcaption>
                        Mamá, falta un slash y no muestro nada
                    </figcaption>
                </figure>
            </main>
            <footer>deBakatas memes date ©</footer>
    );
};

export default App;
