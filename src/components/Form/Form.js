import React, { useEffect, useState } from "react";
import "./form.css";

export default function Form(props) {
  const steps = ["enter a task", "click on button"];
  const addTask = "add Task";
  const [Value, setValue] = useState("")

  const HandleChange = (e) => {
    setValue(e.target.value) 
  }

  useEffect(() => { 
    console.log(props.val.value)
    if(typeof props.val.value !== 'undefined'){
      setValue(props.val.value.title)
    }
  
  }, [props.val])



  return (
    <div style={{ width: "50%", margin: "10px" }}>
      <ul> 
        {steps.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <input onChange={(e)=>HandleChange(e)} value={Value}  className="input" />
      <button onClick={()=>props.addTask(Value)}>{
        props.mode === "a" ? "Add Task" : "Update Task" 
      }</button>
    </div> 
  );
}
