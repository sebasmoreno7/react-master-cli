# React Rules

-   `className` attribute instead of `class`

    ```
    ❌ <h1 class="title">Hello</h1>
    ✅ <h1 className="title">Hello</h1>
    ```

-   `htmlFor` attribute instead of `for`

    ```
    ❌ <label for="email">E-mail</label>
    ✅ <label htmlFor="email">E-mail</label>
    ```

-   [Tags must be closed and all tags can be self-closing][closing tags]

    ```
    ❌ <input type="text">
    ✅ <input type="text" />

    ✅ <div /> // Self closing tag
    ```

-   Image and static files paths are relative to where the app is served, not to where the component is used.

    ```
    ❌ <img src="../../public/images/chewy.png />
    ✅ <img src="/images/chewy.png />
    ```

-   A Component _must_ return a single node, see [React Fragments][react fragments]

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
