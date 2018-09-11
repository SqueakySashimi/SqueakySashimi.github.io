import {
  GET_ACCOUNTS,
  GET_TRANSACTIONS,
  ERRORHANDLER,
  GET_CURRENCY
} from "./types";
import axios from "axios";

export const getAccounts = () => async dispatch => {
  await axios
    .get("http://localhost:8080/api/getbalance")
    .then(res => {
      dispatch({
        type: GET_ACCOUNTS,
        payload: res.data.account
      });
      dispatch({
        type: GET_CURRENCY,
        payload: res.data.currency
      });
    })
    .catch(e => {
      dispatch({ type: ERRORHANDLER, payload: e });
    });
};

export const getTransactions = () => async dispatch => {
  await axios
    .get("http://localhost:8080/api/getbalance")
    .then(res => {
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data.debitsAndCredits
      });
      dispatch({
        type: GET_CURRENCY,
        payload: res.data.currency
      });
    })
    .catch(e => {
      dispatch({ type: ERRORHANDLER, payload: e });
    });
};
