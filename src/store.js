import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "react-router-redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const browserHistory = createBrowserHistory();

const middleware = [thunk];

const defaultState = {};

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const newHistory = syncHistoryWithStore(browserHistory, store);

export default store;
export const history = newHistory;
