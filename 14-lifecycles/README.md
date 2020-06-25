# LifeCycles

> [Code Sandbox](https://codesandbox.io/s/14-lifecycles-wbn2b)

Tenemos una app en donde el usuario va a poder agregar un nuevo arbol, mostraremos la lista de arboles y agregaremos la posibilidad de borrar (talar) el arbol.

## Links relevantes

-   [Errores en promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/catch)
-   [Obtener locación del browser](https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition)
-   [Ciclos de Vida](https://es.reactjs.org/docs/state-and-lifecycle.html)
-   [Información del explorador](https://developer.mozilla.org/es/docs/Web/API/Navigator)
-   [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
-   [Fecha y hora](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date)

## Nuestra App

### App.jsx

Aqui renderizaremos toda nuestra app y haremos el manejo global del estado.

-   `constructor`
    Busca si hay un estado en localstorage, si lo hay pondremos ese valor como valor del estado.

-   `componentDidMount`
    Vamos a obtener información de cuando la App está lista.

-   `componentDidUpdate`
    Cada que haya un cambio, vamos a guardar el estado en el localstorage

### Form.jsx

Es la parte que se encarga de recopilar toda la información para enviarlo a `App.jsx`

-   Usa el evento `onChange` para tomar lo que está escribiendo el usuario.
-   Usa el evento `onSubmit` para crear lo que va a ser la nueva planta, deberás:
    -   Obtener la posición actual con `geoLocation`
    -   Obtener el explorador con `navigator`
    -   Obtener el tipo de planta usando el `pseudoFetch`, usa uno de estos datos al azar.
    -   `pseudoFetch` puede fallar, si eso sucede debes mostrar el error.
    -   Obtener la hora actual con `Date.now()` (hora de plantado)

### Trees.jsx

Aquí recibirás los arboles y generaras una lista de `<Tree />`

### Tree.jsx

En este componente mostrarás la información de cada arbol

-   Valores dinámicos:
    -   Nombre
    -   Tipo de planta
    -   Link del tipo de planta
    -   Link a google maps con la ubicación
    -   Alt de la imagen
    -   Texto con hora del plantado
-   Agregar la funcionalidad de borrar (talar) una planta
-   `componentWillUnmount`
    -   Usalo para avisarle a `App.jsx`, que el elemento va a ser borrado.

### CutTree.jsx

Inicialmente no debe renderizarse, una vez se hayan agregado arboles, el `<Tree>` debe notificarle a `<App>` que va a ser borrado, recopila esa información y renderiza:

-   Nombre del arbol borrado
-   Fecha y hora del borrado
