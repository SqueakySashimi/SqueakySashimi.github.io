import { createStore } from "redux";

import rootReducer from "./reducers/index";
import fetchTransactions from "./data/transactions";
import fetchAccounts from "./data/accounts";

const defaultState = {
  transactions: fetchTransactions(),
  accounts: fetchAccounts()
};

const store = createStore(rootReducer, defaultState);

export default store;
export const initialState = defaultState;
