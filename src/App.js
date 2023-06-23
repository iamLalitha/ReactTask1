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
import React from 'react'

function App(props) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        
      </ul>
    </div>
  )
}

export default App