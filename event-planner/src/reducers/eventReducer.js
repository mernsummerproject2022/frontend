import {
  GET_ALL_EVENTS_ERROR,
  GET_ALL_EVENTS_SUCCESS,
  GET_EVENT_DETAILS_SUCCESS,
  GET_EVENT_DETAILS_ERROR,
  GET_MY_EVENTS_SUCCESS,
  GET_MY_EVENTS_ERROR,
  ADD_EVENT_ERROR,
  ADD_EVENT_SUCCESS,
} from "../actions/types";
import { eventReducer as initialState } from "../utils/constants";

const eventReducer = (state = initialState, action) => {
  switch (action.type /* The reducer listening for action to update store */) {
    case GET_ALL_EVENTS_SUCCESS: {
      return {
        ...state,
        events: action.payload,
      };
    }
    case GET_ALL_EVENTS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case GET_EVENT_DETAILS_SUCCESS: {
      return {
        ...state,
        event: action.payload,
      };
    }
    case GET_EVENT_DETAILS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case GET_MY_EVENTS_SUCCESS: {
      return {
        ...state,
        myEvents: action.payload,
      };
    }
    case GET_MY_EVENTS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ADD_EVENT_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case ADD_EVENT_SUCCESS: {
      state.myEvents.push(action.payload);
      state.events.push(action.payload);
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default eventReducer;
