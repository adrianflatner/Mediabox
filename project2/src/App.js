import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="gridLayout">
      {/* <div className="NavbarBackground"> </div> */}
      <div className="NavbarGrid">
        <Navbar />
      </div>
   
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
