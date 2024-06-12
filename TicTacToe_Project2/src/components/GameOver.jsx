export default function GameOver({ winner, restart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} has won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={restart}>Restart Game</button>
      </p>
    </div>
  );
}
