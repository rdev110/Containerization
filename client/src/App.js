import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) setBackendData(data);
      });

    return () => {
      ignore = true;
    }; // cleanup
  }, []);

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

        {/* 🔗 Show backend data */}
        <div style={{ marginTop: "2rem" }}>
          <h2>🔗 Backend Integration</h2>
          {backendData ? (
            <pre style={{ textAlign: "left" }}>
              {JSON.stringify(backendData, null, 2)}
            </pre>
          ) : (
            <p>Loading backend data...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
