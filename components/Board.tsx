// component board of the game tic tac toe
/**
 * creation of board component
 * @param {squares} array of squares
 * @param {onClick} function to handle click
 * @returns {JSX.Element} board component
 * @constructor
 * 
 */

import React from 'react';
import Square from './Square';

type BoardProps = {
    squares: string[];
    onClick: (i: number) => void;
};


const Board = ({ squares, onClick }: BoardProps): JSX.Element => {
    return (
        <div className="board">
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
        </div>
    );
    }

export default Board;
