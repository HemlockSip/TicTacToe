import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// this is to avoid hardcoding the game board inside the component
export default function GameBoard({ onSelectSquare, turns }){
 let gameBoard = initialGameBoard;

    for (const turn of turns){
        const {square, player}  = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard)=> {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activeSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }

    return <ol id="game-board">
      {gameBoard.map((row,rowIndex)=> 
       <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol, colIndex) => 
             <li key={colIndex}>
                <button onClick={()=> onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
            </li>)}
        </ol>
      </li> )}    
    </ol>;
}