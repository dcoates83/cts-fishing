import CssBaseline from "@mui/material/CssBaseline";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
);
