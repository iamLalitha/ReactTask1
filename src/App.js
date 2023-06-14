// import React from 'react'
// import './App.css';
// function App() {
//   return (
//     <section className="pricing py-5">
//   <div className="container">
//     <div className="row">
//        <div className="col-lg-4">
//         <div className="card mb-5 mb-lg-0">
//           <div className="card-body">
//             <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
//             <h6 className="card-price text-center">$0<span class="period">/month</span></h6>
//             <hr/>
//             <ul className="fa-ul">
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
//               <li className="text-muted"><span className="fa-li"><i class="fas fa-times"></i></span>Unlimited
//                 Private Projects</li>
//               <li className="text-muted"><span className="fa-li"><i class="fas fa-times"></i></span>Dedicated
//                 Phone Support</li>
//               <li className="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
//               </li>
//               <li className="text-muted"><span className="fa-li"><i class="fas fa-times"></i></span>Monthly Status
//                 Reports</li>
//             </ul>
//             <div className="d-grid">
//               <button className="btn btn-primary text-uppercase">Button</button>
//             </div>
//             </div>
//         </div>
//       </div>
    
//       <div className="col-lg-4">
//         <div className="card mb-5 mb-lg-0">
//           <div className="card-body">
//             <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
//             <h6 className="card-price text-center">$9<span class="period">/month</span></h6>
//             <hr/>
//             <ul className="fa-ul">
//               <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
//               <li className="text-muted"><span className="fa-li"><i class="fas fa-times"></i></span>Monthly Status
//                 Reports</li>
//             </ul>
//             <div className="d-grid">
//               <button className="btn btn-primary text-uppercase">Button</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-4">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
//             <h6 className="card-price text-center">$49<span class="period">/month</span></h6>
//             <hr/>
//             <ul className="fa-ul">
//               <li><span className="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
//               </li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
//                 Subdomains</li>
//               <li><span className="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
//             </ul>
//             <div className="d-grid">
//               <button className="btn btn-primary text-uppercase">Button</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }

// export default App;

// day 3 react 
// import React from 'react'; //not necessary from react 17

// function App(props) {
//   const {notes} =props;
//   // console.log(notes);
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//         <li>{notes[3].content}</li>
//         <li>{notes[4].content}</li>
//       </ul>
//     </div>
//   )
// }

// export default App;
//below we are converting the li items into an array using map and then returning it as li item.
// here we have converted the normal list items into a dynamic list
// import React from 'react'; //not necessary from react 17

// function App(props) {
//   const {notes} =props;
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note=> 
//         <li key={note.id}> {note.content}</li>)}
//       </ul>
//     </div>
//   )
// }

// export default App;

// import React from 'react'; //not necessary from react 17
// function Note({note}) {
//   return(
//     <li>{note.content}</li>
//   )
// }


// function App({notes}) {
  
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note=> 
//         <Note key={note.id} note={note}/>
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App;

//in the below code we added star symbol with help of important key
//there are other ways as well using importnat key- refer it in github.

// import React from 'react'; //not necessary from react 17
// function Note({note}) {
//   return(
//     <li>{note.content} {note.important && '*'}</li>
    
//   )
// }


// function App({notes}) {
  
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note=> 
//         <Note key={note.id} note={note}/>
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App;

//on pressing onsubmit the event is added
// import React from 'react'; //not necessary from react 17
// function Note({note}) {
//   return(
//     <li>{note.content} {note.important && '*'}</li>
    
//   )
// }


// function App({notes}) {
//   const addNote= (event)=>{
//     event.preventDefault();
//     console.log('button clicked', event.target);
//   }
  
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note=> 
//         <Note key={note.id} note={note}/>
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input/>
//         <button type='submit'>Save Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;

//here passing the onclick in button itself

// import React from 'react'; //not necessary from react 17
// function Note({note}) {
//   return(
//     <li>{note.content} {note.important && '*'}</li>
    
//   )
// }


// function App({notes}) {
//   const addNote= (event)=>{
//     event.preventDefault();
//     console.log('button clicked', event.target);
//   }
  
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note=> 
//         <Note key={note.id} note={note}/>
//         )}
//       </ul>
//       <form>
//         <input/>
//         <button onClick={addNote}>Save Note</button>
//       </form>
//     </div>
//   )
// }

// export default App;

//DAY 4 -REACT COMPONENTS
//CREATING CLASS COMPONENT:

// import {Component} from 'react'

//class component
//extends is nothing but it inherits the properties from the component class.
//here App is a child class which inherits the properties from Parent class Component.
//but functional components are better than class components.
// class App extends Component {
//   render(){
//     return <div>Hello World!</div>
//   }
// }

// export default App

// HOW TO PASS PROPS IN CLASS COMPONENT ?

// import {Component} from 'react';

// class Hello extends Component{
//   render(){
//     // console.log(this.props);
//     const {name} =this.props;
//     return(
//       <div>Hello, {name}!</div>
//     )
//   }
// }

// class App extends Component {
//   render(){
//     return <div>
//       <Hello name={'lalitha'}/>
//       </div>
//   }
// }

// export default App

//COMPONENT LIFE CYCLE 

// import React, {Component} from 'react';
// export class App extends Component{

//   //componentDidMount: called after the component ha been rendered to the DOM.
//   componentDidMount(){
//     console.log('component mounted');
//   }

//   componentDidUpdate(){
//     //it is invoked after the component has been updated in the DOM.
//     // state or props changes
//   }

//   componentWillUnmount(){
//     //it is invoked just before the component is removed from the DOM.
//     //releasing memory or resources
//     //detaching the events
//   }
//   render(){
//     return <div>
//       Hello World!
//       </div>
//   }

// }
// export default App

//STATEFUL COMPONENTS
// import React, {Component} from 'react';
// export class App extends Component{
  
//   constructor(props){
//     super(props);
//     this.state={
//       count:0,
//     }
//   }

//   handlePlusClick = () => {
//     this.setState((prevState) =>({
//       count: prevState.count+1,
//     }));
//   }

//   handleminusClick = () => {
//     this.setState((prevState) =>({
//       count: prevState.count-1,
//     }));
//   }

//   handleZeroClick=()=>{
//     this.setState((prevState) =>({
//       count:0,
//     }));
//   }
  
//   render(){
//     return <div>
//       <p>Count: {this.state.count}</p>
//       <button onClick={this.handlePlusClick}>plus</button>
//       <button onClick={this.handleminusClick}>minus</button>
//       <button onClick={this.handleZeroClick}>zero</button>
//       </div>
//   }

// }
// export default App;

//REUSABLE COMPONENTS
import React, {Component} from 'react';
//exporting the Hello from the components
import Hello from './components/Hello';
export class App extends Component{
    render(){
    return (
      <div>
        <Hello/>
      </div>
    )
    }
}
export default App;

