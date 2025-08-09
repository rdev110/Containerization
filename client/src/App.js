import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="Landing-header">
        <img src={logo} className="Landing-logo" alt="logo" />
        <h1>Welcome to My Demo App</h1>
        <p>
          This is a simple React landing page. Start building something awesome!
        </p>
        <a
          className="Landing-button"
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
