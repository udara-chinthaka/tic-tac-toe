import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerInputName, setPlayerName] = useState(name);

  function editHandler() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerInputName);
    }
  }

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = (
    <span className="player-name"> {playerInputName}</span>
  );
  let playerCon = "";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerInputName}
        onChange={changeHandler} // two way binding / take the values from the user and update the value in same fields.
      />
    );
  } else {
    playerCon = <span className="player-name"> {playerInputName}</span>;
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}> {isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
