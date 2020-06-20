# State and Events

> [Code Sandbox](https://codesandbox.io/s/08-state-events-p0qt2)

## `this.setState(function)`

Cada vez vamos conociendo un poco más de como funciona React, ahora sabemos que en la función `this.setState`, no solo podemos enviar un objeto, sino que cuando necesitemos tener acceso al estado para hacer cambios a partir de ahí, podremos enviar una función que debe retornar un objeto con los cambios que querramos tener.

```jsx
class App extends React.Component {
    aumentar() {
        // ❌
        this.setState({ contador: this.state.contador + 1 });

        // ✅
        this.setState((previousState) => {
            return {
                contador: previousState.contador + 1,
            };
        });
    }
}
```

## Event Listeners en React

Con React tenemos lo mejor de ambos mundos, la facilidad de agregar los eventos directamente en el elemento, y con todo el contros que nos ofrece JavaScript.

Debemos tener en cuenta que es algo diferente de lo que haciamos usualmente:

```html
<!-- Soy HTML -->
<button type="button" onclick="miFuncion()">
    Haz algo
</button>
```

En React se vería algo así

```jsx
const App = () => (
    <button type="button" onClick={miFuncion}>
        Haz algo
    </button>
);
```

-   Los nombres de los eventos eventos son en [camelCase](https://es.wikipedia.org/wiki/Camel_case)
-   Usas los braces (`{}`) en lugar de las comillas, debido a que es un contenido dinámico.
-   No llames a la función, si lo haces se ejecutara en render en lugar de cuando se dispare el evento
    -   ❌ `onClick={miFuncion()}`
    -   ✅ `onClick={miFuncion}`

Recuerda que si estás usando un `Class`, debes llamar los eventos desde `this`.

```jsx
class App extends React.Component {
    miFuncion = () => {};

    render() {
        return (
            <button type="button" onClick={this.miFuncion}>
                Haz algo
            </button>
        );
    }
}
```

## Eventos Sintéticos

Los eventos en React son un poco diferentes, sin embargo antes de eso, veamos como recibimos toda esa información:

```jsx
class App extends React.Component {
    // Aqui recibimos un parametro que va a ser el evento.
    miFuncion = (evento) => {};

    render() {
        return (
            <>
                {/* Recibirlo automaticamente */}
                <button type="button" onClick={this.miFuncion}>
                    Haz algo
                </button>

                {/* Pasar el evento manualmente */}
                <button type="button" onClick={(e) => this.miFuncion(e)}>
                    Haz algo
                </button>
            </>
        );
    }
}
```

Sin embargo React hace las cosas un poco diferente, si fueramos a imprimir el objeto `evento` de un evento en JavaScript vainilla, recibiríamos una información similar a esto:

```javascript
{
    altKey: false,
    bubbles: true,
    button: 0,
    buttons: 0,
    cancelBubble: false,
    cancelable: true,
    clientX: 450,
    clientY: 206,
    ​...
}
```

Sin embargo si tratamos de hacerlo desde nuestra clase de React, va a suceder algo así:

```javascript
miFuncion = (evento) => {
    console.log(evento)
}

// output
{
    altKey: null,
    bubbles: null,
    button: null,
    buttons: null,
    cancelBubble: null,
    cancelable: null,
    clientX: null,
    clientY: null,
    ​...
}
```

**¿Por qué sucede esto?** La respuesta: _eventos sinteticos_.

React evita que accedas por defecto a todo el objeto evento, esto se debe a que `evento` es un enorme objeto con una serie de información que probablemente no será utilizada. Para disminuir la carga, React solo busca las propiedades que explicitamente le pidas:

```javascript
miFuncion = (evento) => {
    console.log(evento); // {clientX: null, clientY: null, target: null, ...}
    console.log(evento.clientX); // 286
    console.log(evento.clientY); // 384
    console.log(evento.target); // <button>
};
```

Si en un caso extremo, necesitaras acceder a todo el objeto evento en React (Idealmente esto solo debería ser en desarrollo, este código no debería quedarse), React nos ofrece una manera de ver todo el objeto `evento`:

```javascript
miFuncion = (evento) => {
    // Llamamos al método `persist` que viene en el `evento`
    evento.persist();
    console.log(evento); // {altKey: false, bubbles: true, button: 0, buttons: 0, ...}
};
```

## Pasando parametros

Tendremos ocasiones en las cuales queremos pasar información adicional, para hacer esto definiremos una función en el onClick, de este modo podemos agregar los datos a nuestra función sin llamarla inmediatamente.

```jsx
class App extends React.Component {
    miFuncion = (color) => {
        console.log(`¡Aja! Oprimiero el ${color}`);
    };

    render() {
        return (
            <>
                <button type="button" onClick={() => this.miFuncion('verde')}>
                    Soy un aguacate
                </button>

                <button type="button" onClick={() => this.miFuncion('rojo')}>
                    Soy un pimentón
                </button>
            </>
        );
    }
}
```

Si lo necesitamos, podemos mantener el evento y agregar información adicional:

```jsx
class App extends React.Component {
    miFuncion = (evento, color) => {
        console.log(`Le dieron un ${evento.type} al ${color}`);
    };

    render() {
        return (
            <>
                <button
                    type="button"
                    onClick={(e) => this.miFuncion(e, 'verde')}
                >
                    Soy un aguacate
                </button>

                <button
                    type="button"
                    onClick={(e) => this.miFuncion(e, 'rojo')}
                >
                    Soy un pimentón
                </button>
            </>
        );
    }
}
```
