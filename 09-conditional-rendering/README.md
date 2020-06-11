# Activity - Conditional Rendering

Estás encargado de cambiar el día y la noche, así que debes hacer qué tenga sentido usando el switch que te preveemos, en la forma de un `<input type="checkbox" />`

Aquí está tu reto:

-   Agrega estado para manejar los cambios en el tiempo.
-   Agrega un evento en el input para manejar los cambios que sucedan ahí.
-   Cambia el `<main className>` para que solo tenga una de las clases `day|night`, respectivamente.
-   Esconde la imagen del sol o de la luna respectivamente.
-   ¿Escuchas ese ruido de noche? Son ronquidos, solo cuando esté de noche deberás mostrar el `<h2>zZzZzZz...</h2>`.

_No necesitas usar CSS_ para esconder las cosas, React tiene su propia manera de manejar esto, eso es a lo que se llama [renderizado condicional](https://es.reactjs.org/docs/conditional-rendering.html)
