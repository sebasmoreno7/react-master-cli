import React from 'react';

const ComplexData = (props) => (
    <ul>
        {props.list.map((listElement) => (
            <li key={listElement}>{listElement}</li>
        ))}
    </ul>
);

export default ComplexData;
