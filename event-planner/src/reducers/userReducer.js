/* Import types from action types */
import {
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR

  } from '../actions/types';
  
  const initialState = {
    /* The initial state of the component */
    auth: false,
    signup: false,
    error: null,
  };
 
  const userReducer = (state=initialState, action) => {
    switch (action.type /* The reducer listening for action to update store */) {
      case SIGN_UP_SUCCESS: {
        state.signup = true;
        return {
          ...state,
        };
      }
      case SIGN_UP_ERROR: {
        state.signup = false;
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