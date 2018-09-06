import { createStore, compse } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

import rootReducer from "./reducers/index";
import fetchTransactions from "./data/transactions";
import fetchAccounts from "./data/accounts";

const defaultState = {
  transactions: fetchTransactions(),
  accounts: fetchAccounts()
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
