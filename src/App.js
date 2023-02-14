import React, {useState} from "react";
import logo from './logo.svg';
import { Gameboard } from "./components/Gameboard";
import './App.css';

const imgArray = ["https://assets.codepen.io/282737/cat2.jpg", "https://assets.codepen.io/282737/cat3.jpg"]

function App() {
 

  return (
    <div className="app">
      <Gameboard imgArray={imgArray} rowLength={2} />
    </div>
  );
}

export default App;
