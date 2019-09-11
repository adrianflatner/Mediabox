import React from 'react';
import logo from './logo.svg';
import placeholder from './components/pictures/placeholder.jpg';
import './App.css';
import Panel from './components/Panel.js';

function App() {
  return (
    <div className="Wrapper">
      
        <div className="Title">
            <h1>I really like your shirt, homo</h1>
            <p>thanks dad</p> 
        </div>

        <div className="Tabs"><Panel /></div>
        <div className="Artboard"><img id="placeholder" src={placeholder} alt="placeholder"/></div>
        <div className="Artboard-tools">KNAPPEPANEL</div>





     

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
