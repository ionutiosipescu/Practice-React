import React, { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <div>
        <h3>Increment</h3>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <h3>Decrement</h3>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
export default UseStateExample;
