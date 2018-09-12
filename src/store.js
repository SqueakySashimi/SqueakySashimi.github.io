import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const defaultState = {};

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
