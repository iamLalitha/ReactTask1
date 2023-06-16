//without React Router
import React, { useState } from 'react'
import {Link, Route, BrowserRouter as Router, Routes, useParams} from 'react-router-dom';

function Home(){
    return(
        <div>
            <h2>Home App</h2>
        </div>
    );
}
function Note({notes}){
    const id= useParams().id;
    const note=notes.find(n=> n.id === Number(id));
    return(
        <div>
            <h2>{note.content}</h2>
        </div>
    )
 }
        
//search this id in notes


function Notes({notes}){
    return(
        <div>
            <h2>Notes</h2>
            <ul>
                {
                    Notes.map(note=>
                       <li key={note.id}><Link to={`/notes/${note.id}`}>{note.content}</Link></li> )
                }
            </ul>
        </div>
    );
}

function Users(){
    return(
        <div>
            <h2>Users App</h2>
        </div>
    );
}

function App() {

    const[page,setPage] = useState('home');
    const content=() =>{
        if(page==='home'){
            return<Home/>;
        }
        else if(page==='notes'){
            return <Notes/>;
        }
        else if(page==='users'){
            return <Users/>;
        }
    }
    const toPage=(page) => (event)=>{
        event.preventDefault();
        setPage(page);
    }
    //for padding
    const padding={
        padding:10
    };
  return (
    <Router>
        <div>
            <Link to='/' style={padding}>home</Link>
            <Link to='/notes' style={padding}>notes</Link>
            <Link to='/users' style={padding}>users</Link>
        </div>
         <Routes>
            <Route path='/users' element={<Users/>}/>
            <Route path='/notes' element={<Notes/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
        </Router>
    
  )
}

export default App;