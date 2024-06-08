import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import { RickPovider } from "./context/RickContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RickPovider>
      <App />
    </RickPovider>
  </React.StrictMode>
);
