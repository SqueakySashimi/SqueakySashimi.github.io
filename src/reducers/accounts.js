//reducer takes in the action and a copy of the current state
import { GET_ACCOUNTS } from "../actions/types";
const initialState = {
  accounts: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload
      };
    default:
      return state;
  }
}
