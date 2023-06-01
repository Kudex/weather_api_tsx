import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers/rootReducer";

const store = createStore(
  combineReducers(rootReducer),
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;