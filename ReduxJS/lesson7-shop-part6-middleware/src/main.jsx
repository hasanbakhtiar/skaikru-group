import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import { ApiProvider } from './context/ApiContext'
import { CartProvider } from 'react-use-cart';
import './assets/sass/style.scss';
import { ModeProvider } from './context/ModeContext';
import { LangProvider } from './context/LangContext';
import { Provider } from 'react-redux';
import { addProduct, getProduct, getProductToDatabase } from './tools/actions/shopAction';
import shopStore from './tools/store/shopStore';
import { supabase } from './supabase/supabaseClient';

const store = shopStore();

store.subscribe(() => {
  console.log(store.getState());

})

store.dispatch(getProductToDatabase());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <LangProvider>
      <ModeProvider>
        <CartProvider>
          <ApiProvider>
            <App />
          </ApiProvider>
        </CartProvider>
      </ModeProvider>
    </LangProvider>
    </Provider>
  </React.StrictMode>
)
