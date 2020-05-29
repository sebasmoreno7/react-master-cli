import React from 'react';

const Operation = (props) => (
    <small>The operation result is {props.operation(props.value)}</small>
);

export default Operation;
