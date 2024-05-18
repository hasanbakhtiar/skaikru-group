import { applyMiddleware, compose, createStore } from "redux"
import { shopReducer } from "../reducers/shopReducer";
import { thunk } from "redux-thunk";



const shopStore = () => {
    const store = createStore(shopReducer,compose(applyMiddleware(thunk)));
    return store;
}

export default shopStore