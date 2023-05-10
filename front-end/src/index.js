import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import { ProSidebarProvider } from "react-pro-sidebar";
<script type="text/javascript" src="https://assets.chec-cdn.com/v2/commerce.js"></script>

ReactDOM.render(
    // <React.StrictMode>
    // <div>
    //   <ProSidebarProvider>
        <App />
//       </ProSidebarProvider>
//     </div>
//   </React.StrictMode>
  , document.getElementById("root")
);

