# deBakatas React CLI 🌵⚛️

_¡Este proyecto contiene todas tus actividades durante y luego de la clase!_

![CLI en uso](/__docs/cover.gif)

La idea detrás de este proyecto es poder manejar todo el contenido del curso en un solo lugar, de forma local olvidandonos de las dependencias y configuración; de este modo puedes trabajar en tu entorno como te sea más cómodo y con tus propias herramientas.

---

## Preparación

-   En GitHub dale a la opcion `fork`. Esto creará una copia del proyecto en tu cuenta.

    ![Fork en GitHub](/__docs/fork.png)

-   Clona `tu` repositorio en tu computador.

    ![Clonar en GitHub](/__docs/clone.png)

    ```sh
        git clone https://github.com/TU_USUARIO/react-master-cli.git
    ```

-   Instala los paquetes necesarios (dentro de la carpeta).

    ```sh
        npm install
    ```

-   Agrega un [git remote](https://git-scm.com/docs/git-remote), esto nos servirá para actualizarlo.
    ```sh
        git remote add source https://github.com/debakatas/react-master-cli.git
    ```

---

## Uso

Corre el comando para abrir la selección de proyectos, usa las flechas para moverte por las opciones, enter para arrancar un proyecto.

```sh
    npm start
```

Te estaremos indicando que proyecto vamos a correr o en cual debes realizar tus actividades.

---

## Estructura de un proyecto

```
<project>
    public
        index.html
    App.jsx
    index.js
    metadata.json
    style.css
```

|                     | Carpeta | Uso                                                                                                                                                                                                                            |
| ------------------- | :-----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `public`            |    X    | Aquí podrás poner archivos estaticos como imagenes o fuentes que quieras usar.                                                                                                                                                 |
| `public/index.html` |         | Archivo que usamos como base para servir nuestros proyectos, usualmente no lo modificaremos.                                                                                                                                   |
| `App.jsx`           |         | Componente de React renderizado por defecto, aquí suele comenzar tu trabajo.                                                                                                                                                   |
| `index.js`          |         | Archivo inicial, este es el que se incluye en nuestro HTML, aquí renderizamos nuestra app de React y agregamos algo de configuración.                                                                                          |
| `metadata.json`     |         | Esta es información usada para nuestra herramienta CLI que maneja todos los proyectos.                                                                                                                                         |
| `style.css`         |         | Los estilos para tu proyecto, es CSS vainilla (sin ningún pre-procesador), si necesitas usar [CSS Modules](https://github.com/css-modules/css-modules) agrega la opcion: `"modules": true` al `metadata.json` de ese proyecto. |

Si deseas crear tu propio proyecto, puedes copiar la carpeta `__template`, cambiarle el nombre (el nombre no debe contener `__`), modifica el nombre y descripción en `metadata.json`, vuelve a iniciar la herramienta con `npm start` y tu proyecto estará disponible en las opciones (se organiza alfabeticamente).

## Actualización

Aveces necesitaremos actualizar el repositiorio (solo funciona si es un clon de git con todos los pasos de [preparación](##preparación) ), para ese puedes correr los siguientes scripts:

```sh
git add --all
git commit -m "Actualización"
git push
git pull source master
rm -rf node_modules
rm package-lock.json; rm yarn.lock
npm install
```
