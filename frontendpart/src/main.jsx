import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import stor from './reduxfiles/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={stor}>
    <App />
  </Provider>
);
