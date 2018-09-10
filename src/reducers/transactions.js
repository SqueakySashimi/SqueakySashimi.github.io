//reducer takes in the action and a copy of the current state
import { GET_TRANSACTIONS, GET_CURRENCY } from "../actions/types";
const initialState = {
  transactions: [],
  currency: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    case GET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    default:
      return state;
  }
}
