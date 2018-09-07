import { GET_ACCOUNTS, GET_TRANSACTIONS } from "./types";
import axios from "axios";
export const getAccounts = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/getbalance");
  dispatch({
    type: GET_ACCOUNTS,
    payload: res.data
  });
};

export const getTransactions = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/getbalance");
  dispatch({
    type: GET_TRANSACTIONS,
    payload: res.data
  });
};
