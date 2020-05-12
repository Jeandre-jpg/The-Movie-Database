import React from "react";
import './App.css';


export default function App() {
  const name = "Jeandré";
  const element = <h1>Hello, {name}</h1>;
  return (
    <div className="App" style={{ color: "pink" }}>
      <h1>Hello {name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      {element}
      {name}
    </div>
  );
}


