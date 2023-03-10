import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TicTacToe from './TicTacToe';

const root = ReactDOM.createRoot(document.getElementById('root'));

const x = 11;

const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>

const cat_data = {name: "Cindy", fluffiness: 200};
root.render(<App cat_data={cat_data} />);


