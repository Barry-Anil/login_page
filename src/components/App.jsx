import React from "react";
import Login from "./login";

var login = false;

function App() {
  return <div className="container">{login ? <h1> Hello</h1> : <Login />}</div>;
}

export default App;
