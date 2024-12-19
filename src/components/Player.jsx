import { useState } from 'react';

export default function Player({intialName, symbol, isActive}) {
    const [playerName , setPlayerName] = useState(intialName);  //original name passed in as props
    const [isEditing, setIsEditing ] = useState(false);

    function handleChange(event){
      setPlayerName(event.target.value);  // the event object is passed to the function and the value of the input field is updated
    }

    function handleEditClick() {
        setIsEditing((editing) => !editing);  // The function is set this way to handle the asynchronous nature of the state update.
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    let btnCaption = "Edit";

    if(isEditing){
      editablePlayerName = <input type="text" required value = {playerName} onChange={handleChange}/>; // here the original name is then replaced by the input field
        //btnCaption = "Save";
    }

  return (
    <li className={isActive ? 'active' : undefined}> 
        <span className="player">
            {editablePlayerName}
            <span className='player-symbol'>{symbol}</span>
        </span>
          <button onClick={handleEditClick} >{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}