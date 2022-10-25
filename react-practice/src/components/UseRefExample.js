import React, { useRef } from "react";

const UseRefExample = () => {
  const myBtnRed = useRef(null);
  const myBtnBlue = useRef(null);

  const clickItR = () => {
    console.log(myBtnRed.current);
  };
  const clickItB = () => {
    console.log(myBtnRed.current);
  };

  return (
    <>
      <button ref={myBtnRed} onClick={clickItR} className={"red"}></button>
      <br />
      <button ref={myBtnBlue} onClick={clickItB} className={"blue"}></button>
    </>
  );
};
export default UseRefExample;
