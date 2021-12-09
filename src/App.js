import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello/Hello";
import Form from "./components/Form/Form";
import React, { useEffect, useState } from "react";
import Task from "./components/Task/Task";
import TasksList from "./components/TasksList/TasksList";
import {
  fetchTasks,
  addTask as addTasks,
  deleteTask as deleteTasks,
  updateTask as updateTasks,
  updateTask,
  deleteTask,
} from "./services/task.service";
import wait from "./assets/wait.gif";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const addTask = async (t) => {

    setLoading(true);

    try {
      await addTasks(t);
      setLoading(false);
    } catch (e) {
      setErrors(true);
      setLoading(false);
    }

    let tasksCopy = [...tasks];
    tasksCopy.push({
      id: tasksCopy.length + 1,
      title: t,
      duration: 50,
      type: "IT",
      date: "2020-01-02",
    });
    settasks(tasksCopy);
  };

  const [ToggleVisibility, setToggleVisibility] = useState(true);
  const [Mode, setMode] = useState("a");
  const [UpdateValue, setUpdateValue] = useState("");
  const [tasks, settasks] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Errors, setErrors] = useState("");



  const fetchData = async () => {
    setLoading(true);
    try {
      const tasks = await fetchTasks();
      settasks(tasks);
      setLoading(false);
    } catch (e) {
      console.log("error");
      setErrors(e);
      setLoading(false);
    }
  };

  const toggelTask = () => {
    setToggleVisibility(!ToggleVisibility);
  };

  const handelDelete = async (t) => {
    setLoading(true);
    const id = t.id;

    try {
      await deleteTasks(id);
      setLoading(false);
    } catch (e) {
      setErrors(true);
      setLoading(false);
    }
    const tasksCopy = tasks.filter((obj) => obj.id !== t.id);
    settasks(tasksCopy);
  };

  const handelUpdate = async (t, val) => {

    setLoading(true);
    const id = t.id;

    try {
      await updateTask(id,val);
      setLoading(false);
    } catch (e) {
      setErrors(true);
      setLoading(false);
    }

  
    let tasksCopy = [...tasks];

    let taskv = tasksCopy.map((obj) => {
      if (obj.id === id) {
        console.log(val.title);
        return { ...obj, title: val.title, duration: val.duration };
      }
      return obj;
    });
    console.log(taskv);
    settasks(taskv);
  };

  const getErrors = () => {
    let error = Errors.toString();
    return error;
  };

  return (
    <div className="App">
      <button onClick={toggelTask}>Task visibility</button>
      <Form addTask={addTask} mode={Mode} val={UpdateValue} />

      {ToggleVisibility &&
        (!Loading ? (
          !Errors ? (
            <TasksList
              handelDelete={(t) => handelDelete(t)}
              handelUpdate={(val, t) => handelUpdate(val, t)}
              tasks={tasks}
            />
          ) : (
            <div style={{ color: "red" }}>{getErrors()}</div>
          )
        ) : (
          <>
            <img className="centered" style={{ margin: "auto" }} src={wait} />
          </>
        ))}
    </div>
  );
}

export default App;
