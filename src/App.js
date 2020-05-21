<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import React from "react";
import "./styles.css";

export const RapidAPI = require('rapidapi-connect');
  
fetch('https://rapidapi.com/priaid/api/symptom-checker/endpoints')
  .then(response => response.json())
  .then(data => console.log(data));
>>>>>>> parent of 80d0e680... Image and headers
