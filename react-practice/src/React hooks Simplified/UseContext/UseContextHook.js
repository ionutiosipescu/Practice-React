import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

export default function UseContextHook() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
