import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "pink"
      }}
    >
      <h1>Hello DK v.2</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
