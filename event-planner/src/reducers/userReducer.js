/* Import types from action types */
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from "../actions/types";
import { userReducer as initialState } from "../utils/constants";

const userReducer = (state = initialState, action) => {
  switch (action.type /* The reducer listening for action to update store */) {
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
      };
    }
    case SIGN_UP_ERROR: {
      state.error = action.payload;
      return {
        ...state,
      };
    }
    case SIGN_IN_SUCCESS: {
      state.auth = true;
      return {
        ...state,
      };
    }
    case SIGN_IN_ERROR: {
      state.auth = false;
      state.error = action.payload.error;
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
