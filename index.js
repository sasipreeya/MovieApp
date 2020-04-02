/**
 * @format
 */
import React from "react";
import App from "./App";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import logger from "redux-logger";

const store = createStore(reducers, {}, applyMiddleware(logger, reduxThunk));
const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
