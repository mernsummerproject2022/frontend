import {
  GET_ALL_EVENTS_ERROR,
  GET_EVENT_DETAILS_ERROR,
  GET_MY_EVENTS_ERROR,
  ADD_EVENT_ERROR,
} from "./types";
import { BACKEND_URL } from "../utils/constants";
import { fetchWrapper, handleResponse } from "../utils/fetchWrapper";


export const getAllEvents = async (dispatch) => {
  try {
    const url =`${BACKEND_URL}/events`;
    const response = await fetchWrapper.get(url);
    handleResponse(dispatch,response,"GET_ALL_EVENTS")
  } catch (error) {
    return dispatch({
      type: GET_ALL_EVENTS_ERROR,
      payload: error,
    });
  }
};

export const getEventDetails = async (dispatch, eventId) => {
  try {
    const url=`${BACKEND_URL}/view/${eventId}`;
    const response = await fetchWrapper.get(url);
    handleResponse(dispatch,response,"GET_EVENT_DETAILS")
  } catch (error) {
    return dispatch({
      type: GET_EVENT_DETAILS_ERROR,
      payload: error,
    });
  }
};

export const getMyEvents = async (dispatch, userId) => {
  try {
    const url=`${BACKEND_URL}/events/${userId}`;
    const response = await fetchWrapper.get(url);
    handleResponse(dispatch,response,"GET_MY_EVENTS");
  } catch (error) {
    return dispatch({
      type: GET_MY_EVENTS_ERROR,
      payload: error,
    });
  }
};

export const addEvent = async (dispatch, eventData) => {
    try {
        const url=`${BACKEND_URL}/events`;
        const response = await fetchWrapper.post(url,eventData);
        handleResponse(dispatch,response,"ADD_EVENT");
    } catch (error) {
        return dispatch({
        type: ADD_EVENT_ERROR,
        payload: error,
        });
    }
    }
