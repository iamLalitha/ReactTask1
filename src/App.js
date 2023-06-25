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
// A Simple Note taking Application
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CreateNote from './components/createNote';
import ReadNotes from './components/ReadNotes';
import { Router } from 'react-router-dom';


function App() {
  
  // define a state
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const [showStatus, setShowStatus] = useState('all');

  // get the data
  
  useEffect(() => {
    // setNotes(props.notes);
    //making axios call
    axios
    .get('http://localhost:3001/notes')
    .then(response=> setNotes(response.data));
  });

  // create a reference for the first input text box
  const newNoteContentRef = useRef(null);
 // define the addNote method
  let addNote = (event) => {
    event.preventDefault();
     // create a new object
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant==='true',
    }
    // add the new object to the notes state
    // setNotes(notes.concat(noteObject));

    //send the record to the json server 
    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response=> console.log(response));
    // console.log(noteObject);

    // clear the input text box
    setNewNoteContent('');
    setNewNoteImportant('');
    newNoteContentRef.current.focus();
  }

  let handleNoteChange = (event) => {
    setNewNoteContent(event.target.value);
  }

  let handleSelectChange = (event) => {
    setNewNoteImportant(event.target.value);
  }

  let handleStatusChange = (event) => {
    setShowStatus(event.target.value);
    // console.log(event.target.value);
  }
  
  return (
   <Router>
     <div>
     <ReadNotes showStatus={showStatus}
     handleStatusChange={handleStatusChange}
     notes={notes} 
     />
      <CreateNote addNote={addNote} newNoteContent=
      {newNoteContent} handleNoteChange={handleNoteChange}
      newNoteContentRef={newNoteContentRef}
      handleSelectChange={handleSelectChange}
      newNoteImportant={newNoteImportant}/>
    </div>
   </Router>

  )
}

export default App;