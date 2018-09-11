import { GET_ACCOUNTS, GET_CURRENCY } from "../actions/types";
const initialState = {
  accounts: {},
  currency: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload
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
