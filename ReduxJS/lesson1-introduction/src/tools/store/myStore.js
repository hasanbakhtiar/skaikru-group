import { counterReducer } from "../reducers/counterReducer";
import {createStore} from 'redux';
const myStore = () => {
    const store = createStore(counterReducer);
    return store;
}

export default myStore