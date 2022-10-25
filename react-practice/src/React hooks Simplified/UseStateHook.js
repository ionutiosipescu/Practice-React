import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  const decrementCount = () => {
    setCount(count - 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
    setTheme("red");
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default UseStateHook;
