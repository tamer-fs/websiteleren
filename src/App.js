import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={(e) => decrement(e)}>decrement</button>
      <button onClick={(e) => increment(e)}>increment</button>
      <p>HELLo</p>
    </>
  );
}

export default App;
