//reducer takes in the action and a copy of the current state
import { GET_TRANSACTIONS } from "../actions/types";
const initialState = {
  transactions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    default:
      return state;
  }
}
