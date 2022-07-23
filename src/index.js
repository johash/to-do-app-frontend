import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider, createTheme } from "@nextui-org/react";

import { store } from "./store/store";
import { Provider } from "react-redux";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primaryLight: "#ae5ce4",
      primaryLightHover: "#7229AF",
      primaryLightActive: "#ae5ce4",
      primary: "#ae5ce4",
      primaryBorder: "#6878bc",
      primarySolidHover: "#7229AF",
      primaryBorderHover: "#6878bc",
      primarySolidContrast: "#fffff",
      primaryShadow: "#5462a1",
      errorLight: "#a15454",
      errorLightHover: "#944848",
      errorLightContrast: "$white",
      checkboxBorderColor: "#6878bc",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider theme={theme}>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
