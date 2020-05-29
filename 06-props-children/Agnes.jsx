import React from 'react';

//  Agnes debería renderizar a Tronte
const Agnes = (props) => (
    <li>
        <figure>
            <img src="/agnes.png" alt="Agnes" />
            {/* Deep debería ser 0 si es undefined */}
            <figcaption>Agnes {props.deep}</figcaption>
        </figure>
    </li>
);

export default Agnes;
