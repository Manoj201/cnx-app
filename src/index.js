import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import App from "app/App";
import Themes from "themes/index";

import configureStore from "./app/store/ConfigureStore";
import * as serviceWorker from "./serviceWorker";

let reactotroneStoreActions = null;

if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  reactotroneStoreActions = require("./config/Reactotrone.config").default;
}

const store = configureStore(reactotroneStoreActions);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
