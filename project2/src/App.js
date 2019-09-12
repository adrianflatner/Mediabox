import React from 'react';
import './App.css';
import Tools from './components/Tools.js';
import Images from './components/Images.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="Wrapper">
      
        <div className="Title">
            <h1>I really like your shirt, homo</h1>
            <p>thanks dad</p> 
        </div>

        <div className="Navbar"><Navbar /></div>
        <div className="Artboard"><Images /></div>  
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
