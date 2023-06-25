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
import Home from './components/Home';
import EditNote from './components/EditNote';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';


function App() {
  
  // define a state
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const [showStatus, setShowStatus] = useState('all');
 const padding ={
  padding:15
 };
 
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
    // .then(response=> console.log(response));
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
      <Link style={padding} to="/">Home</Link>
      <Link style={padding} to="/read">Read Notes</Link>
      <Link style={padding} to="/create">Create Notes</Link>
      <Link style={padding} to="/edit">Edit Notes</Link>
    </div>

    <Routes>
      <Route path='/read' element={<ReadNotes showStatus={showStatus} handleStatusChange={handleStatusChange} notes={notes} />} />
      <Route path='/create' element={<CreateNote addNote={addNote} newNoteContent={newNoteContent} handleNoteChange={handleNoteChange} newNoteContentRef={newNoteContentRef} handleSelectChange={handleSelectChange} newNoteImportant={newNoteImportant} />} />
      <Route path='/' element={<Home />} />
      <Route path='/edit' element={<EditNote />} />
    </Routes>
  </Router>

  )
}

export default App;