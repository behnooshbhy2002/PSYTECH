import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProSidebarProvider } from "react-pro-sidebar";
ReactDOM.render(
  <Provider store={store}>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </Provider>,
  document.getElementById("root")
);
