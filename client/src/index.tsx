import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./app";

import "./reset.scss";
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
