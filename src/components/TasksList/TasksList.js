import React from "react";
import Task from "../Task/Task";

export default function TasksList(props) {
  return (
    <div className="TasksList">
      {props.tasks.map((t) => {
        return <Task title={t.title} duration={t.duration} type={t.type} date={t.date}/> 
      })}
    </div>
  );
}
