import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Ensures background and text follow dark mode */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
