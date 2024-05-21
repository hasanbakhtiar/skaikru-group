import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import ElPacho from "./components/ElPacho";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      {/* <App /> */}
      <ElPacho />
    </DataProvider>
  </React.StrictMode>
);
