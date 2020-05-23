import React from 'react';

import Student from './Student';
import Teacher from './Teacher';

import './style.css';
import '../__config/base.css';

const students = ['Alexa', 'Diego', 'Gus', 'Jefry', 'Sebas', 'Nico', 'Laura'];

const App = () => (
    <main>
        <figure className="logo">
            <img src="/react.png" alt="" />
            <figcaption>Que lindo React </figcaption>
        </figure>
        <Teacher />
        <ul className="students">
            {students.map((student) => (
                <Student key={student} name={student} />
            ))}
        </ul>
    </main>
);

export default App;
