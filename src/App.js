import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {Alok as Alok1111} from "./components/alok";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          edit <code>src/App.js</code> and save to reload.
        </p>
        <Alok1111 />
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
