import React from 'react';
import './App.css';
import Panel from './components/Panel.js';
import Tools from './components/Tools.js';

function App() {
  return (
    <div className="Wrapper">
      
        <div className="Title">
            <h1>I really like your shirt, homo</h1>
            <p>thanks dad</p> 
        </div>

        <div className="Tabs"><Panel /></div>
        <div className="Artboard"><h2>ARBOARD</h2></div>
        <div className="Artboard-tools"><Tools /></div>





     

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
