import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//strict mode is used to identify any deprecated tags are there or not. it just to check.
//the below line removes the strict mode. it is same as like above code lines from 6-10. 
//the below code jus removes the stirct mode.

//data
// const notes=[
//     {
//         id:1,
//         content:'Working with Lists',
//         important:true
//     },
//     {
//         id:2,
//         content:'Usage of keys',
//         important:false
//     },
//     {
//         id:3,
//         content:'Conditional Rendering',
//         important:true
//     },
//     {
//         id:4,
//         content:'Handling Events',
//         important:true
//     },
//     {
//         id:5,
//         content:'Props vs State',
//         important:false
//     },
// ]
//passing the above notes data to the app i.e passing the notes as 'props'
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

