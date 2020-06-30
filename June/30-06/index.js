import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// 4. step
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
// 5. step
const store = createStore(
  allReducers,
  // the link is added from redux github repo
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// 6. step
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);