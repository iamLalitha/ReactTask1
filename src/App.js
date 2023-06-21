
// DAY 8 
//CONTENT: Context-API
// What is context, provide, createContext
// Avoid props drilling
// Session task – profile name changes//without React Router

//props drilling 
// import React from 'react'

// function GrandChildComponent(props){
//     return(
//         <div>
//             <h3>GrandChildComponent</h3>
//             <p>{props.message}</p>
//         </div>
//     )
// }
// function ChildComponent(props){
//     const message='Hello grandchild!'
//     return(
//         <div>
//             <h2>Child component</h2>
//             <p>{props.message}</p>
//             <GrandChildComponent message={message}/>
//         </div>
//     )
// }
// function App() {
//     //parent component data
//     const message ='hello child!'
//   return (
//     <div>
//         <h1>Parent component</h1>
//         <ChildComponent message={message}/>
//     </div>
//   )
// }

// export default App

//Context -its a hook 


// import React, {createContext, useContext, useState} from 'react';
// //create context
// const MessageContext=createContext();
// const ChildMessageContext=createContext();

// function GrandChildComponent(){
//     const message= useContext(ChildMessageContext);
//     return(
//         <div>
//             <h3>GrandChildComponent</h3>
//             <p>{message}</p>
//         </div>
//     )
// }
// function ChildComponent(){
//     //use the context data
//     const message=useContext(MessageContext);
//     const childMessage='hello from child';
//     return(
//         <div>
//             <h2>child component</h2>
//             <p>{message}</p>
//             <MessageContext.Provider value={childMessage}>
//                 <GrandChildComponent/>
//             </MessageContext.Provider>
//         </div>
//     )
// }
// function App() {
//     const [message,setMessage] =useState('hello from app');
//   return (
//     <div>
//         <h1>Parent component</h1>
//         <MessageContext.Provider value ={message}>
//             <ChildComponent/>
//         </MessageContext.Provider>
//     </div>
//   )
// }

// export default App;

import React, {createContext, useContext, useState} from 'react';
//create context data
const ProfileContext=createContext();

//child component
function Profile(){
    //use the context data
    const {profilename,setProfilename}=useContext(ProfileContext);
    let onChangeprofilenameHandler=(event)=>{
        setProfilename(event.target.value);
        // console.log(event.target.value);
    }
    return(
        <div>
            <h2>Profile Name:</h2>
            <input type="text" value={profilename}
            onChange={onChangeprofilenameHandler} />
    
        </div>
    )
}

function App() {
    const [profilename,setProfilename] =useState('');
  return (
    <div>
        <ProfileContext.Provider value={{profilename,setProfilename}}>
            <Profile/>
        </ProfileContext.Provider>
    </div>
  )
}

export default App;