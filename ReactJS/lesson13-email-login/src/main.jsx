import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App'
import { ApiProvider } from './context/ApiContext'
import { CartProvider } from 'react-use-cart';
import './assets/css/style.css';
import { ModeProvider } from './context/ModeContext';
import { LangProvider } from './context/LangContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <ModeProvider>
        <CartProvider>
          <ApiProvider>
            <App />
          </ApiProvider>
        </CartProvider>
      </ModeProvider>
    </LangProvider>
  </React.StrictMode>
)
