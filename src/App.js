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
 // note component 
 import React, {useRef, useState} from "react";

 function Note({note}){
  return(
    <li>{note.content}</li>
  )
 }

function App({props}) {

  //define a state
  const [notes, setNotes]=useState([]);
  const [newNoteContent, setNewNoteContent]=useState(" ");
  const [newNoteImportant,setNewNoteImportant]=useState(' ');

  //get the data 
  useEffect(()=>{
    setNotes(props.notes);
  },[]);

  //create the reference for the first input text box
  const newNoteContentRef= useRef(null);

  //define the addNote method
  let addNote=(event)=>{
    event.preventDefault();

    //create a new object and add the new object to the notes state
    let noteObject={
      id:notes.length +1,
      content: newNoteContent,
      important: newNoteImportant,
    }

    //add the new object to the notes state
    setNotes(notes.concat(noteObject));
   
    //clear the input text box
    setNewNoteContent('');
    setNewNoteImportant('');
    newNoteContentRef.current.focus();
  }

  //handlenotchange func
  let handleNoteChange=(event)=>{
    setNewNoteContent(event.target.value);
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
        <input value={newNoteContent} onChange={handleNoteChange}
        placeholder='type a note ...'
        rel={newNoteContentRef}/>
        
        <br/>
        
        <input type='text' placeholder='enter true or false'
        value={newNoteImportant} onChange={()=>
        setNewNoteImportant(e=>e.target.value)}/>
        <br/>
        
        <button type='submit'>Add note</button>
      </form>
    </div>
  )
}

export default App;