import React from "react"
const Counter = ({ count, onCountChange = (count) => {} }) => {
    return (
      <div style={{ display: "inline" }}>
        <button onClick={onCountChange.bind(this, 1)}>+</button>
        <span style={{ padding: "10px" }}>{count}</span>
        <button onClick={onCountChange.bind(this, -1)}>-</button>
      </div>
    );
  };
  
  export default Counter;
  