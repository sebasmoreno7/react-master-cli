import React from 'react';

const Boat = ({ children, side, moveBoat }) => (
    <div className={`boat ${side === 'right' ? 'boat--right' : ''}`}>
        <button type="button" className="boat-image" onClick={moveBoat}>
            <img src="/boat.svg" alt="" />
        </button>
        <figure className="boat-items">{children}</figure>
    </div>
);

export default Boat;
