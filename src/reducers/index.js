import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import accounts from "./accounts";
import transactions from "./transactions";
import error from "./error";

const rootReducer = combineReducers({
  accounts,
  transactions,
  error,
  routing: routerReducer
});

export default rootReducer;
