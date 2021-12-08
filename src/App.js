import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello/Hello";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import Task from "./components/Task/Task";
import TasksList from "./components/TasksList/TasksList";

function App() {

  const sayHello = () => {
     console.log("hello")
  }

  const [tasks, settasks] = useState([
    {title:"learn javascript",duration:50,type:"IT",date:"2020-01-02"},
    {title:"learn javascript",duration:50,type:"IT",date:"2020-01-02"},
    {title:"learn javascript",duration:50}
  ]);

  return (
    <div className="App">
      <Form sayHello={sayHello} />
      <TasksList  tasks={tasks} />
    </div>
  );
}

export default App;
