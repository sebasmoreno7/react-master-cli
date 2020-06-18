# React Router

> [Code Sandbox](https://codesandbox.io/s/12-router-basics-8l8tc)

El Router nos permite tener varias páginas, en una sola aplicación en el explorador.

## Actividad

Ya creamos una app con varias páginas, pero vemos que tiene un problema, estamos repitiendo elementos a través de varias paginas y es poco Reactivo. Vamos a cambiarlo para construirlo a partir del array que tenemos en `data.js`.

-   Importa la información de `data.js` en App.
-   Pasa la información a `NavBar.jsx` y construye dinamicamente los elementos de la navegación.
-   Reemplaza las rutas estaticas diferentes a `Home.jsx` por una ruta dinámica ([Parámetros URL](https://reacttraining.com/react-router/web/example/url-params)).
-   En la ruta dinámica, crea un componente que busque la información de la Agencia Espacial adecuada en base a la ruta en la que esté. (`props.match.params.[algo]`)
-   Renderiza la información en tu componente genérico.
