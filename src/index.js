import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";

import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
