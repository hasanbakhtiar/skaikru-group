import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import textStore from './tools/store/textStore'
import supabase from './config/connect'
import { getData } from './tools/action/textAction'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from 'react-use-wishlist'
const store = textStore;


const fetchdata = async () => {
  const { data, error } = await supabase.from('mydata').select();
  if (error) {
    console.log(error);
  } else {
    store.dispatch(getData(data));
  }
}
fetchdata();


// console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </Provider>
  </React.StrictMode>,
)
