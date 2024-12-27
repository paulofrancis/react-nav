import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return <h1>Hello, React 18!</h1>;
}