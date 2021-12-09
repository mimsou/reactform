import React from "react";
import Task from "../Task/Task";

export default function TasksList(props) {
  return (
    <div className="TasksList">
      {props.tasks.map((t,i) => {
        return (
          <Task
            title={t.title}
            duration={t.duration}
            type={t.type}
            date={t.date}
            handelDelete={()=>props.handelDelete(t)}
            handelUpdate={(updateValue)=>props.handelUpdate(t,updateValue)} 
          >
            <p>Hello this is props child</p>

          </Task>
        );
      })}
    </div>
  );
}
