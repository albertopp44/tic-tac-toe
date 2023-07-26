//what our users are going to play the game

// with this snippet from pages\index.tsx:
'use client'

import React, { useState } from 'react';
import { useEffect } from 'react';
import Board from '../components/Board';
import { calculateWinner } from '../helpers/calculateWinner';

//now using useState hook and useEffect hook we have to set the state of the game, frist player, then the next player, then the winner

export default function Home() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  return ( 
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {/* <History history={history} moveTo={moveTo} currentMove={stepNumber} /> */}
        </div>
        <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</h3>
      </div>
    </div>
  );

}
