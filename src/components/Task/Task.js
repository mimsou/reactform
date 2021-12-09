import React from "react";

export default function Task(props) {
 
  const detail = props.detail;
  return (
    <div
      className="cadres"
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
      }}
    >
      <div
        style={{
          display: "block",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div> {props.title} {props.children}  </div>
        <div> {props.duration} </div>
        <div> {props.type} </div>
        <div> {props.date} </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ margin: "10px" }}>
          <a onClick={()=>props.handelDelete()} href="#">delete</a>
        </div>
        <div style={{ margin: "10px" }}>
          <a onClick={()=>props.handelUpdate()} href="#">update</a>
        </div>
      </div>
    </div>
  );
}
