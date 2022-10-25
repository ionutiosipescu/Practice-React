import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      <h2>{state}</h2>
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
export default UseReducerExample;
