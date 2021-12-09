import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello/Hello";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import Task from "./components/Task/Task";
import TasksList from "./components/TasksList/TasksList";

function App() {
   
  

  const addTask = (t) => {
    let tasksCopy = [...tasks];
    tasksCopy.push(
      {
        id: tasksCopy.length+1,
        title: t,
        duration: 50,
        type: "IT",
        date: "2020-01-02",
      }
    )
    settasks(tasksCopy)
  };

  const [ToggleVisibility, setToggleVisibility] = useState(true);
  const [Mode, setMode] = useState("a")
  const [UpdateValue, setUpdateValue] = useState("")
  const [tasks, settasks] = useState([
    {
      id: 1,
      title: "learn javascript",
      duration: 50,
      type: "IT",
      date: "2020-01-02",
    },
    {
      id: 2,
      title: "learn javascript",
      duration: 50,
      type: "IT",
      date: "2020-01-02",
    },
    { id: 3, title: "learn javascript", duration: 50 },
  ]);

  function deleteRow(arr, row) {
    arr = arr.slice(0); // make copy
    arr.splice(row - 1, 1);
    return arr;
 }


  const toggelTask = () => {
    setToggleVisibility(!ToggleVisibility);
  };

  const handelDelete = (t) => {
    let tasksCopy = [...tasks];
    const i = tasksCopy.indexOf(t);
    deleteRow(tasksCopy,i)
    settasks(deleteRow(tasksCopy,i));
  };

  const handelUpdate = (t) => {
    setMode("u");
    let tasksCopy = [...tasks];
    const i = tasksCopy.indexOf(t);
    setUpdateValue({index:i,value:t})
  };

  return (
    <div className="App">
      <button onClick={toggelTask}>Task visibility</button>
      <Form addTask={addTask} mode={Mode} val={UpdateValue}/>
      {ToggleVisibility && (
        <TasksList
          handelDelete={(t) => handelDelete(t)}
          handelUpdate={(t) => handelUpdate(t)}
          tasks={tasks}
        />
      )}
    </div>
  );
}

export default App;
