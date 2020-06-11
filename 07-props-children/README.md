# Una familia con props

> [Code Sandbox](https://codesandbox.io/s/07-props-children-e3ssv)

¿Conoces la serie [Dark](https://www.netflix.com/title/80100172)? Sin importar la respuesta, te tenemos una prueba.

Vamos a recrear un pequeño arbol familiar con componentes de React, y usaremos los props para qué se hablen entre ellos. Así se ve la linea familiar

```
- Agnes
    - Tronte
        - Ulrich
            - Mikkel
                - Jonas
```

## El reto

-   Crea un componente por cada miembro de la familia.
-   Todos deben recibir un props `profundidad` | `deep` que va a ser un número.
-   El valor por defecto de `deep` es 0.
-   El componente debe renderizar una foto del miembro, su nombre, su profundidad y llamar a su descendiente directo (revisa el arbol familiar arriba)
-   Cuando llames al descendiente, aumenta en uno el deep.

Cuando tengas todo el arbol renderizado, se verá algo así:

[Arbol Nielsen Dark](/06-props-children/public/family-tree.png)

## ¿Donde comenzar?

Ya creamos el componente `Agnes.jsx` por ti 😉. Usalo como referencia para crear los demás.
