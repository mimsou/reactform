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
        <div> {props.title} </div>
        <div> {props.duration} </div>
        <div> {props.type} </div>
        <div> {props.date} </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ margin: "10px" }}>
          <a href="#">delete</a>
        </div>
        <div style={{ margin: "10px" }}>
          <a href="#">update</a>
        </div>
      </div>
    </div>
  );
}
