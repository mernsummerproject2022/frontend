import { SEND_INVITE_SUCCESS, SEND_INVITE_ERROR } from "../actions/types";
import { inviteReducer as initialState } from "../utils/constants";

const inviteReducer = (state = initialState, action) => {
  switch (action.type /* The reducer listening for action to update store */) {
    case SEND_INVITE_SUCCESS: {
      return {
        ...state,
      };
    }
    case SEND_INVITE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default inviteReducer;