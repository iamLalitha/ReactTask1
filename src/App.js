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
// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// import CreateNote from './components/createNote';
// import ReadNotes from './components/ReadNotes';
// import Home from './components/Home';
// import EditNote from './components/EditNote';
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';


// function App() {
//   const [notes, setNotes] = useState([]);
//   const [newNoteContent, setNewNoteContent] = useState('');
//   const [newNoteImportant, setNewNoteImportant] = useState('');
//   const [showStatus, setShowStatus] = useState('all');
//   const newNoteContentRef = useRef(null);

//   useEffect(() => {
//     axios.get('http://localhost:3001/notes').then((response) => setNotes(response.data));
//   }, []);

//   let addNote = (event) => {
//     event.preventDefault();
//     let noteObject = {
//       id: notes.length + 1,
//       content: newNoteContent,
//       important: newNoteImportant === 'true',
//     };

//     axios.post('http://localhost:3001/notes', noteObject);

//     setNewNoteContent('');
//     setNewNoteImportant('');
//     newNoteContentRef.current.focus();
//   };

//   let handleNoteChange = (event) => {
//     setNewNoteContent(event.target.value);
//   };

//   let handleSelectChange = (event) => {
//     setNewNoteImportant(event.target.value);
//   };

//   let handleStatusChange = (event) => {
//     setShowStatus(event.target.value);
//   };

//   return (
//     <Router>
//       <div className="container">
//         <nav className="navigation">
//           <Link className="navigation-link" to="/">
//             Home
//           </Link>
//           <Link className="navigation-link" to="/read">
//             Read Notes
//           </Link>
//           <Link className="navigation-link" to="/create">
//             Create Notes
//           </Link>
//           <Link className="navigation-link" to="/edit">
//             Edit Notes
//           </Link>
//         </nav>
//       </div>

//       <div className="content">
//         <Routes>
//           <Route
//             path="/read"
//             element={
//               <ReadNotes
//                 id="read-notes"
//                 showStatus={showStatus}
//                 handleStatusChange={handleStatusChange}
//                 notes={notes}
//               />
//             }
//           />
//           <Route
//             path="/create"
//             element={
//               <CreateNote
//                 id="create-note"
//                 addNote={addNote}
//                 newNoteContent={newNoteContent}
//                 handleNoteChange={handleNoteChange}
//                 newNoteContentRef={newNoteContentRef}
//                 handleSelectChange={handleSelectChange}
//                 newNoteImportant={newNoteImportant}
//               />
//             }
//           />
//           <Route path="/" element={<Home />} />
//           <Route path="/edit" element={<EditNote />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react'
// import {createStore} from 'redux';
// import { Provider } from 'react-redux';

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App

//using formik 
//formik is a library to build forms in react 
import React from 'react';
import {useFormik} from 'formik';

function App() {

  const formik=useFormik({
    initialValues:{
      email:" ",
    },
    onSubmit:values=>{
      console.log(values);
    }
  });

  // const initialValues={
  //   email:'',
  //   password:'',
  // };

  // const validateForm=(values)=>{

  // }

  // const handleSubmit=()=>{

  // }

  return (
    // <div>
    //   {/* inside formik three attributes should be given */}
    //   <Formik
    //   initialValues={initialValues}
    //   validate={validateForm}
    //   onSubmit={handleSubmit}>
    //     <Form>
    //       <div>
    //         <Field type="email" name="email"></Field>
    //       </div>
    //       <div>
    //         <Field type="password" name="password"></Field>
    //       </div>
    //     </Form>
    //   </Formik>
    // </div>
    <form onSubmit={formik.handleSubmit}>
      <input
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
      placeholder="type your email..."/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App