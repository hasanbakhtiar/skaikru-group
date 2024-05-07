import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { addProduct } from "./tools/actions/shopAction";
import shopStore from "./tools/store/shopStore"
import App from './App'
import { Provider } from 'react-redux';


const store = shopStore();

store.subscribe(() => {
  console.log(store.getState());

})

store.dispatch(addProduct({ photo: "https://img-prd-pim.poorvika.com/product/oppo-reno-10-pro-5g-Glossy-purple-256gb-12gb-ram-front-and-back-view.png", title: "Oppo", price: 1000, desc: 'super' }));



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
