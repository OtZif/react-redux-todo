import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./custom-reset.css";
import App from "./components/app/app.js";
import { reducer } from "./reducers";

let store = createStore(reducer);

const update = () => {
  console.log(store.getState().todos)
  localStorage.setItem("todo", JSON.stringify(store.getState()));
};

store.subscribe(update);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
