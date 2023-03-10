import cat from './cat.png';
import './App.css';
import React from 'react';

function Cat(props) {
  return (
    <div>
      <h2>Welcome to {props.name}'s Homepage!</h2>
      <img class="cat" src={cat}/>
    </div>
  )
}
function App(props) {
    return(
      <div className="App">
      <h1>Hello!</h1>
      <Cat name={props.name} />
      </div>
    );
}

export default App;
