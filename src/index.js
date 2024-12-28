import { createRoot } from "react-dom/client";
import React from "react";
import App from "./views/App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
