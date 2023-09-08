// square cell where players put X OR O 
// /**
//  * creation of square component
//  * @param {value} value of square
//  * @param {onClick} function to handle click
//  * @returns {JSX.Element}
//  * @constructor
//  */

import React from 'react';

interface SquareProps {
    value: string;
    onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps): JSX.Element => (
    
    <div className='background-square-button'>
    
    <button className="square" onClick={onClick}>
        {value}
        BUTTON
    </button>
    </div>
    
);

export default Square;
