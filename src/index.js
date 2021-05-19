import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers/index'

const logger = createLogger();

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(logger),
  // other store enhancers if any
));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
