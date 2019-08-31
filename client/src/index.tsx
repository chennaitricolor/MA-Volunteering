import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import ErrorBoundary from "./components/ErrorBoundary";
import * as serviceWorker from "./serviceWorker";
import { FormStateProvider } from "./context/form";

ReactDOM.render(
  <ErrorBoundary>
    <FormStateProvider>
      <App />
    </FormStateProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
