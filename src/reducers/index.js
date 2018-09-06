import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import accounts from "./accounts";
import transactions from "./transactions";

const rootReducer = combineReducers({
  accounts,
  transactions,
  routing: routerReducer
});

export default rootReducer;
