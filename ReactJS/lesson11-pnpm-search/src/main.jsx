import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import { ApiProvider } from './context/ApiContext'
import { CartProvider } from 'react-use-cart';
import './assets/css/style.css';
import { ModeProvider } from './context/ModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeProvider>
      <CartProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </CartProvider>
    </ModeProvider>
  </React.StrictMode>
)
