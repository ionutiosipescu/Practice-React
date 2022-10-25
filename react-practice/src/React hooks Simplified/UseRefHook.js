import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
};
export default UseRefHook;
