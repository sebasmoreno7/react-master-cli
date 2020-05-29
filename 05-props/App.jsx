import React from 'react';

import './style.css';

import Child from './Components/Child';
import Sum from './Components/Sum';
import Operation from './Components/Operation';
import ComplexData from './Components/ComplexData';
import Deep from './Components/Deep';
import DefaultProps from './Components/DefaultProps';

const half = (number) => number / 2;
const twice = (number) => number * 2;

const App = () => (
    <main>
        <h1>I'm the App component</h1>
        <hr />
        <Child content="I'm a static content" />
        <Child content={`Time is ${new Date().getHours()} hours`} />
        <hr />
        <Sum n1="10" n2="30" />
        <hr />
        <Operation value={10} operation={half} />
        <Operation value={10} operation={twice} />
        <hr />
        <ComplexData list={['Eggs', 'Avocado', 'Milk']} />
        <hr />
        <Deep content="I'll be two levels deep" />
        <hr />
        <DefaultProps isCool />
    </main>
);

export default App;
