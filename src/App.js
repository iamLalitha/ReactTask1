// //
// import React, {useState, useRef} from 'react'

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
import React, { useState } from 'react'


function Note({note}){
  return(
    <li>{note.content}</li>
  )
}
 
function App(props) {

 //define a state
 const [notes,setNotes]=useState(props.notes);
 const [newNote,setNewNote]=useState('');
 const [newNoteImportant, setNewNoteImportant]=useState('');

 //get te data
 useEffect(()=>{
  setNotes(props.notes);
 })

 //create a reference for the first input text box
 const newNoteContentRef=useRef(null);

//define addnote function
let addNote=(event)=>{
 event.preventDefault();
 //create a new object
 let noteObject={
  id:notes.length+1,
  content:newNoteContent,
  important: newNoteImportant,
}
// add the new object to the notes state
// console.log(noteObject);
setNotes(notes.concat(noteObject));

//clear the input text box
setNewNote('...new note');
}



let handleNotChange=(event)=>{
 setNewNote(event.target.value);

}
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note=>
        <Note key={note.id} note={note}/>
        )}
      </ul>
      {/* add a simple form for adding notes */}
<form onSubmit={addNote}>
  <input value={newNoteContent} 
  onChange={handleNotChange}
  placeholder='type a note'
  ref={newNoteContentRef}/>
  <br/>
  <input type='text' placeholder='enter true or false' value={newNoteImportant} onChange={(e)=>setNewNoteImportant(e.target.value)}/>
  <button type='submit'>Add Note</button>
</form>
    </div>
  )
}

export default App;