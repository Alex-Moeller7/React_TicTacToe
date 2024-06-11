import { useState } from "react";

export default function Player({ intialName, symbol, isActive }) {
  //set initial name of player
  const [playerName, setPlayerName] = useState(intialName);

  //Set initial state of name editing to false
  const [isEditing, setIsEditing] = useState(false);

  /**
   *
   */
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  /**
   * Sets player name to whatever the user input into text area (name changing)
   * @param {*} event
   */
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  //if player is editing, read input value
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">
          <br />
          Icon: {symbol}
        </span>
      </span>
      <button className="editBtn" onClick={handleEditClick}>
        {isEditing ? "Save Name" : "Edit Name"}
      </button>
    </li>
  );
}
