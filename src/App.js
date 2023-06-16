//without React Router
import React, { useState } from 'react'

function Home(){
    return(
        <div>
            <h2>Home App</h2>
        </div>
    );
}

function Notes(){
    return(
        <div>
            <h2>Notes App</h2>
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
        if(page=='home'){
            return<Home/>;
        }
        else if(page=='notes'){
            return <Notes/>;
        }
        else if(page=='users'){
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
    <div>
        <div>
            {/* {here we have given 3 links, if we click 3 separte component should be displayed } */}
            <a href='' style={padding} onClick={ toPage('home')}>home</a>
            <a href='' style={padding} onClick={ toPage('notes')}>notes</a>
            <a href='' style={padding} onClick={ toPage('users')}>users</a>
        </div>
        {content()}
    </div>
  )
}

export default App;