import cat from './cat.png';
import './App.css';
import React from 'react';
import { useState } from 'react';

function Cat(props) {
  const meow = (meow_sound, event_type) => {
    // alert(event_type.type);
    alert(meow_sound);
  }
  
  let [name, setName] = useState("");
  name === "" ? name = props.name : void(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }

  

  return (
    <div>
      <h2>Welcome to {name}'s Homepage!</h2>
      <p>Today she is {props.fluffiness}% Fluffy!</p>
      <img alt="Cat" onClick={ (event) => meow("Meooooow", event)} className="cat" src={cat}/>
      <form onSubmit={handleSubmit}>
        <label>Change {name}'s name: 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Change!"/>
      </form>
    </div>
  );
}

function App(cat_data) {
    return(
      <div className="App">
      <h1>Hello!</h1>
      <Cat name={cat_data.cat_data.name} fluffiness={cat_data.cat_data.fluffiness} />
      </div>
    );
}

export default App;
