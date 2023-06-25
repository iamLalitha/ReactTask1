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
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const [showStatus, setShowStatus] = useState('all');
  const newNoteContentRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:3001/notes').then((response) => setNotes(response.data));
  }, []);

  let addNote = (event) => {
    event.preventDefault();
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant === 'true',
    };

    axios.post('http://localhost:3001/notes', noteObject);

    setNewNoteContent('');
    setNewNoteImportant('');
    newNoteContentRef.current.focus();
  };

  let handleNoteChange = (event) => {
    setNewNoteContent(event.target.value);
  };

  let handleSelectChange = (event) => {
    setNewNoteImportant(event.target.value);
  };

  let handleStatusChange = (event) => {
    setShowStatus(event.target.value);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navigation">
          <Link className="navigation-link" to="/">
            Home
          </Link>
          <Link className="navigation-link" to="/read">
            Read Notes
          </Link>
          <Link className="navigation-link" to="/create">
            Create Notes
          </Link>
          <Link className="navigation-link" to="/edit">
            Edit Notes
          </Link>
        </nav>
      </div>

      <div className="content">
        <Routes>
          <Route
            path="/read"
            element={
              <ReadNotes
                id="read-notes"
                showStatus={showStatus}
                handleStatusChange={handleStatusChange}
                notes={notes}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateNote
                id="create-note"
                addNote={addNote}
                newNoteContent={newNoteContent}
                handleNoteChange={handleNoteChange}
                newNoteContentRef={newNoteContentRef}
                handleSelectChange={handleSelectChange}
                newNoteImportant={newNoteImportant}
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

