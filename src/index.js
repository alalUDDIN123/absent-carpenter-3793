import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './Pages/Authentication/Context/cart';
import AuthContextProvider from './Pages/Authentication/Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
  <CartContextProvider>  
    <ChakraProvider>
  
      <Provider store={store}>
      <App />
      </Provider>
      
    </ChakraProvider>
    </CartContextProvider>
      </AuthContextProvider>

  </BrowserRouter>
);


