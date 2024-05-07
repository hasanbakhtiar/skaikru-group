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
import { addProduct } from './tools/actions/shopAction';
import shopStore from './tools/store/shopStore';

const store = shopStore();

store.subscribe(() => {
  console.log(store.getState());

})

store.dispatch(addProduct({ photo: "https://img-prd-pim.poorvika.com/product/oppo-reno-10-pro-5g-Glossy-purple-256gb-12gb-ram-front-and-back-view.png", title: "Oppo", price: 1000, desc: 'super' }));

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
