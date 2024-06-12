import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combos";

//Set initial game baord to all empty (null)
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameturns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  //if turns is empty, for loop will not run
  for (const turn of gameTurns) {
    //double oject destructuring to get player info
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combo of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combo[0].row][combo[0].column];
    const secondSquareSymbol = gameBoard[combo[1].row][combo[1].column];
    const thirdSquareSymbol = gameBoard[combo[2].row][combo[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  //if the game turns array has 9 (or more) turns, meaning the board is full and there is not a winner yet
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameturns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameturns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player intialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} restart={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
