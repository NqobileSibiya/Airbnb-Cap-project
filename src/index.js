import React from 'react';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


