//reducer takes in the action and a copy of the current state
import { ERRORHANDLER } from "../actions/types";
const initialState = {
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ERRORHANDLER:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}
