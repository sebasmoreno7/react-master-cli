import React from 'react';

const ComplexData = (props) => (
    <ul>
        {props.list.map((listElement) => (
            <li>{listElement}</li>
        ))}
    </ul>
);

export default ComplexData;
