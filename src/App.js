import React from "react";
import "./styles.css";
import {Welcome} from "./components/Welcome";
import {Navigation} from "./components";

export default function App() {
  return(
    <div className="App">
      <Navigation/>
      <h1>Hello World</h1>
      <Welcome/>
    </div>
  );
}