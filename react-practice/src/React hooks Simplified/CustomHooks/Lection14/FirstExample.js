import React from "react";
import UseLocalStorage from "./UseLocalStorage";
import UseUpdateLogger from "./UseUpdateLogger";

export default function FirstExample() {
  const [name, setName] = UseLocalStorage("name", "");
  UseUpdateLogger(name);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
