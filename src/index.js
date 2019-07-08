import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./custom-reset.css";
import { reducer } from "./reducers";
import AppContainer from "./containers/AppContainer";

let store = createStore(reducer);

const update = () => {
  localStorage.setItem("todo", JSON.stringify(store.getState()));
};

store.subscribe(update);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector("#root")
);
