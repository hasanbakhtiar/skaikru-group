import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { addCount } from './tools/actions/counterAction';
import myStore from './tools/store/myStore';

const store = myStore();


store.dispatch(addCount());


console.log(store.getState());



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
