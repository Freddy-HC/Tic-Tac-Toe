// src/Board.js
import React, { useState } from 'react';
import Cell from './Cell';

function Board() {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const newCells = cells.slice();
        if (calculateWinner(cells) || newCells[i]) {
            return;
        }
        newCells[i] = xIsNext ? 'X' : 'O';
        setCells(newCells);
        setXIsNext(!xIsNext);
    };

    const winner = calculateWinner(cells);
    const status = winner ? `Vinner: ${winner}` : `Neste spiller: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Cell value={cells[0]} onClick={() => handleClick(0)} />
                <Cell value={cells[1]} onClick={() => handleClick(1)} />
                <Cell value={cells[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Cell value={cells[3]} onClick={() => handleClick(3)} />
                <Cell value={cells[4]} onClick={() => handleClick(4)} />
                <Cell value={cells[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Cell value={cells[6]} onClick={() => handleClick(6)} />
                <Cell value={cells[7]} onClick={() => handleClick(7)} />
                <Cell value={cells[8]} onClick={() => handleClick(8)} />
            </div>
        </div>
    );
}

function calculateWinner(cells) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}

export default Board;
