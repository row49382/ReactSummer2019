import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Gets a random number using default parameters and let ES6 features
 * @param {*} upperLimit the upper limit of the random number 
 */
function getRandomNumber(upperLimit = 4) {
  let rand = (Math.random() * 4)
  return rand
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my <code>src/App.js</code> app now.
          Here's a random number: {getRandomNumber()}
        </p>
        Refresh to get a new one!
        <a
          className="App-link"
          href="https://github.com/row49382"
          target="_blank"
          rel="noopener noreferrer"
        >
         Link to my github
        </a>
      </header>
    </div>
  );
}

export default App;
