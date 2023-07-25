import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import {Provider} from 'react-redux';
import { store } from "./store";
const ele=document.getElementById("root");
const root=ReactDOM.createRoot(ele);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
      
    
  )