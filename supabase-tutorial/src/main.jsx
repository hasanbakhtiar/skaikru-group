import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import textStore from './tools/store/textStore'
import supabase from './config/connect'
import { getData } from './tools/action/textAction'
const store = textStore;


const fetchdata = async()=>{
  const {data,error}= await supabase.from('mydata').select();
  if (error) {
      console.log(error);
  }else{
        store.dispatch(getData(data));
  }
}
fetchdata();


// console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
