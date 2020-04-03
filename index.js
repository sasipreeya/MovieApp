/**
 * @format
 */
import React from "react";
import App from "./App";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import searchReducer from "./src/reducers/searchReducer";
import favoriteReducer from "./src/reducers/favoriteReducer";
import logger from "redux-logger";

const store = createStore(
  combineReducers(searchReducer, favoriteReducer),
  {},
  applyMiddleware(logger, reduxThunk)
);
const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
