import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import supabase from "./config/supabaseconnect";
import { Provider } from "react-redux";
import store from "./tools/store";
import { readmovie } from "./tools/slice/movieSlice";
import { readcharacter } from "./tools/slice/characterSlice";

const calldatamovie = async () => {
  const { data, error } = await supabase.from('movie').select();
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    store.dispatch(readmovie(data));
  }
};

const calldatacharacter = async () => {
  const { data, error } = await supabase.from('character').select();
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    store.dispatch(readcharacter(data));
  }
};
calldatamovie();
calldatacharacter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
