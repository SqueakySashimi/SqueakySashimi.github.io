import { combineReducers } from "redux";

import accounts from "./accounts";
import transactions from "./transactions";
import error from "./error";

const rootReducer = combineReducers({
  accounts,
  transactions,
  error
});

export default rootReducer;
