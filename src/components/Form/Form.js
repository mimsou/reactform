import React from "react";
import "./form.css";

export default function Form() {
  const steps = ["enter a task", "click on button"];
  const addTask = "add Task";
  return (
    <div style={{ width: "50%", margin: "10px" }}>
      <ul>
        {steps.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <input className="input" />
      <button>addTask</button>
    </div>
  );
}