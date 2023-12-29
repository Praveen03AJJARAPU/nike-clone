import ReactDOM from 'react-dom/client'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>

);
