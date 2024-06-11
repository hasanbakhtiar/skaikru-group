import {  createStore } from "redux"
import { textReducer } from "../reducer/textReducer";

 const textStore = ()=>{
    const store = createStore(textReducer,);
    return store;
 }

 export default textStore();