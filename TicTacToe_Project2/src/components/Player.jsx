import { useState } from "react";

export default function Player({ intialName, symbol, isActive, onChangeName }) {
  //set initial name of player
  const [playerName, setPlayerName] = useState(intialName);

  //Set initial state of name editing to false
  const [isEditing, setIsEditing] = useState(false);

  /**
   *  Function to control isEditing, meaning player is editing a name
   */
  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
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
        <span className="player-symbol">{symbol}</span>
      </span>
      <button className="editBtn" onClick={handleEditClick}>
        {isEditing ? "Save Name" : "Edit"}
      </button>
    </li>
  );
}
