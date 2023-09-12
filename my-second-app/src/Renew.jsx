import React from "react";

function Renew({ task, isDone }) {
  if (isDone === true) {
    return (
      <div>
        <li>finished : {task}</li>
      </div>
    );
  }else{
    return <li>work one : {task} </li>
  }
}

export default Renew;
