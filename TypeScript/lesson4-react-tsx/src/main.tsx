import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import ElPacho from "./components/ElPacho";
import AppUseMemo from "./components/AppUseMemo";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      {/* <App /> */}
      {/* <ElPacho /> */}
      <AppUseMemo />
    </DataProvider>
  </React.StrictMode>
);
