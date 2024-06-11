import { useState } from "react";

export default function Player({ intialName, symbol }) {
  const [playerName, setPlayerName] = useState(intialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li>
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
