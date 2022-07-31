/* Import types from action types */
import {
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR

  } from '../actions/types';
  
  const initialState = {
    /* The initial state of the component */
    authenticated: false,
    status: '',
    message: ''
  };
 
  const userReducer = (state=initialState, action) => {
    switch (action.type /* The reducer listening for action to update store */) {
      case SIGN_UP_SUCCESS: {
        return {
          ...state,
          status: 'Success',
          message: action.payload.message,
          ...action.payload.user,
          ...action.payload.data,
          authenticated: true
        };
      }
      case SIGN_UP_ERROR: {
        return {
          ...state,
          status: 'Unsuccessful' || undefined,
          message: action.payload.message,
          error: action.payload.error,
          authenticated: false
        };
      }
      case SIGN_IN_SUCCESS: {
        return {
          ...state,
          status: 'Success',
          message: action.payload.message,
          ...action.payload.user,
          ...action.payload.data,
          authenticated: true
        };
      }
      case SIGN_IN_ERROR: {
        return {
          ...state,
          status: 'Unsuccessful' || undefined,
          message: action.payload.message,
          error: action.payload.error,
          authenticated: false
        };
      }
      
      default:
        return state;
    }
  };

    export default userReducer;