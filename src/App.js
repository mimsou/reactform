import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello/Hello";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import Task from "./components/Task/Task";

function App() {
  const [lines, setlines] = useState([
    "learn javascript",
    "learn html",
    "learn css",
  ]);

  const getLine = () => {
    return lines.map((l) => {
      return <Task task={l} />;
    });
  };

  return (
    <div className="App">
      <Form />
      {getLine()}
    </div>
  );
}

export default App;
