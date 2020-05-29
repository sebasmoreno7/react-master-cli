# React Rules

-   Usa el atributo`className` en vez de `class`

    ```
    ❌ <h1 class="title">Hello</h1>
    ✅ <h1 className="title">Hello</h1>
    ```

-   Usa el atributo `htmlFor` en vez de `for`

    ```
    ❌ <label for="email">E-mail</label>
    ✅ <label htmlFor="email">E-mail</label>
    ```

-   [Las etiquetas deben ser cerradas, y todas se pueden cerrar a sí mismas][closing tags]

    ```
    ❌ <input type="text">
    ✅ <input type="text" />

    ✅ <div /> // Etiqueta cerrandose a sí misma
    ```

-   Las rutas de imagenes y archivos estaticos son relativos a donde se sirve la aplicación, no a donde se use en el componente.

    ```
    ❌ <img src="../../public/images/chewy.png />
    ✅ <img src="/images/chewy.png />
    ```

-   Un componente _debe_ solo retornar un nodo, para eso revisa [React Fragments][react fragments]

    ```jsx
    <!-- ❌ -->
    const App = () => (
        <header />
        <footer />
    );

     <!-- ✅ -->
    const App = () => (
        <React.Fragment>
            <header />
            <footer />
        </React.Fragment>
    );

    <!-- ✅✅✅  -->
    const App = () => (
        <>
            <header />
            <footer />
        </>
    );
    ```

<!-- Links -->

[textarea value]: http://facebook.github.io/react/docs/forms.html#why-textarea-value
[select value]: http://facebook.github.io/react/docs/forms.html#why-select-value
[whitespace discussion]: https://github.com/facebook/react/issues/65
[closing tags]: http://facebook.github.io/react/tips/self-closing-tag.html
[react fragments]: https://reactjs.org/docs/fragments.html
