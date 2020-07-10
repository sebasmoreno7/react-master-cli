import React from 'react';
import images from './images';

const Island = ({ opposite, items, changeItem }) => (
    <div className={`island ${opposite ? 'island--right' : ''}`}>
        <img src="/island.svg" alt="" className="land" />
        <figure className="island-space">
            {items.map((llave) => (
                <button
                    type="button"
                    onClick={() => changeItem(llave)}
                    key={llave}
                    className="island-item"
                >
                    <img src={images[llave]} alt="" className={llave} />
                </button>
            ))}
        </figure>
    </div>
);

export default Island;
