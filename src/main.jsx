import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
console.log(store, "KKKKKKKk");
