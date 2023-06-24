// //
// import React, {useState, useRef} from 'react'

import { useState } from "react";

// function App() {
//     const inputRef=useRef(null);
//     const[text,setText]=useState('no text');
//   let  handleButtonClick=()=>{
//     //get the value from the input box
//     let value=useRef.current.value;
//     setText(value);
//     console.log(inputRef);
//   }
//   return (
//     <div>
//         <input type="text"/>
//         <button onClick={handleButtonClick}>Get Text</button>
//         <p>Entered Text:{text}</p>
//     </div>
//   )
// }

// export default App
//DAY 10
//A simple note taking application
 // note component 
 function Note({note}){
  return(
    <li>{note.content}</li>
  )
 }
function App({props}) {

  //define a state
  const[notes, setNotes]=useState(props.notes);
 const[newNote, setNewNote]=useState("...new note");
  //define the addNote method
  let addNote=(event)=>{
    event.preventDefault();
    // console.log('button clicked');

  }

  //handlenotchange func
  let handleNoteChange=(event)=>{
    setNewNote(event.traget.value);
    // console.log('event.target.value');
  }
  return ( 
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note=>
          <Note key={note.id} note={note}/>)}  
      </ul>
      {/* add a simple form for adding notes  */}
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>Add note</button>
      </form>
    </div>
  )
}

export default App;