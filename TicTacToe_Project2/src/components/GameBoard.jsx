import { useState } from "react";

//Set initial game baord to all empty (null)
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  //Note: Param of useState is the initial state
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      //Copy of old array with previous board
      const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];

      //change correct position determined by rowIndex and ColIndex
      //Key Concept: State updated using arrays/objects should be updated in an immutable way
      updatedBoard[rowIndex][colIndex] = "X";

      //return new Game board with updated square
      return updatedBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
