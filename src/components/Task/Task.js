import React, { useState } from "react";

export default function Task(props) {
  const [isupdateMode, setIsUpdateMode] = useState(false);
  const [TitleUpdate, setTitleUpdate] = useState("")
  const [DurationUpdate, setDurationUpdate] = useState("");
 

  const handelChange = (e) => {
    e.preventDefault()
    props.handelUpdate({title:TitleUpdate,duration:DurationUpdate})
    setIsUpdateMode(false)
  }

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
      {!isupdateMode && (
        <>
          <div
            style={{
              display: "block",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              {" "}
              {props.title} {props.children}{" "}
            </div>
            <div> {props.duration} </div>
            <div> {props.type} </div>
            <div> {props.date} </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: "10px" }}>
              <a onClick={() => props.handelDelete()} href="#">
                delete
              </a>
            </div>
            <div style={{ margin: "10px" }}>
              <a
                onClick={() => {
                  setIsUpdateMode(true);
                }}
                href="#"
              >
                update
              </a>
            </div>
          </div>
        </>
      )}

      {isupdateMode && (
        <>
          <div
            style={{
              display: "block",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <form onSubmit={(e)=>handelChange(e)}>
           <input onChange={(e)=>setTitleUpdate(e.target.value)} />
           <input onChange={(e)=>setDurationUpdate(e.target.value)} />
           <button>Update</button>
           </form>
          </div>
        </>
      )}
    </div>
  );
}
