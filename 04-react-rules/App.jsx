import React from 'react';
import './style.css';

const App = () => {
    const name = 'YOUR NAME';

    return (
        <>
            <main>
                <figure>
                    <h2>HTML</h2>
                    <img src="/doge.png" alt="doge" />
                    <figcaption>
                        Hay 345 errores pero voy a renderizar lo que entiendo
                    </figcaption>
                </figure>
                <figure>
                    <h2>JSX</h2>
                    <img src="/cheems.png" alt="cheems" className="small" />
                    <figcaption>
                        Mamá, falta un slash y no muestro nada
                    </figcaption>
                </figure>
            </main>
            <footer>deBakatas memes 2019 ©</footer>
        </>
    );
};

export default App;
