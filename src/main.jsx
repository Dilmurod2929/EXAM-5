import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./Styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
axios.defaults.baseURL = "https://nt-devconnector.onrender.com";
axios.defaults.headers.common["Content-Type"] = "application/json";
let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["x-auth-token"] = `${token}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
