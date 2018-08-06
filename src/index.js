import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./containers/store";
import { Provider } from "react-redux";
import App from "./containers/App";
import "tachyons";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
