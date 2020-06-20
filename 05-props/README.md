# Props

> [Code Sandbox](https://codesandbox.io/s/05-props-27cee)

Los `props` (o propiedades), son la información que pasamos de un componente a otro, esto se debe a que un componente es una `función`, todos estos se reunen en un objeto que es pasado como `parametro` a nuestra función, en donde las llaves serian los nombres que usamos en el `JSX` (HTML).

## Enviando props

```jsx
const value = "hola"

<Component
    estatico="valor"
    dinamico={new Date().getYear()}
    variables={value}
    funciones={() => console.log('🔥')}
    arrays={[1, 2, 3]}
    objetos={{ llave: 'valor' }}
    porDefecto
/>
```

## Recibiendo props

Cuando usamos una función para definir un componente

```jsx
// Siempre se recibe un único paremetro
const Component = (props) => {
    console.log(props);

    return <h1>Función con props</h1>;
};
```

Cuando usamos una clase para definir un componente

```jsx
class Component extends React.Component {
    render() {
        // Aqui usamos `this`
        console.log(this.props);

        return <h1>Clase con props</h1>;
    }
}
```

**El log de nuestro objecto props sería**

```json
{
    "estatico": "valor",
    "dinamico": 2020,
    "variables": "hola",
    "funciones": function () {},
    "arrays": [1, 2, 3],
    "objetos": {
        "llave": "valor"
    },
    "porDefecto": true
}
```
