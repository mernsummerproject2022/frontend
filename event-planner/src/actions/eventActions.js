import {
  GET_ALL_EVENTS_ERROR,
  GET_ALL_EVENTS_SUCCESS,
  GET_EVENT_DETAILS_ERROR,
  GET_EVENT_DETAILS_SUCCESS,
  GET_MY_EVENTS_ERROR,
  GET_MY_EVENTS_SUCCESS,
  ADD_EVENT_ERROR,
    ADD_EVENT_SUCCESS,
} from "./types";
import { BACKEND_URL, APPLICATION_JSON } from "../utils/constants";

const commonHeaders = {
  "Content-Type": APPLICATION_JSON,
  Accept: APPLICATION_JSON,
};

export const getAllEvents = async (dispatch) => {
  try {
    const response = await fetch(`${BACKEND_URL}/events`, {
      method: "GET",
      headers: commonHeaders,
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      alert(data.detail);
      return dispatch({
        type: GET_ALL_EVENTS_ERROR,
        payload: data,
      });
    }
    dispatch({
      type: GET_ALL_EVENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: GET_ALL_EVENTS_ERROR,
      payload: error,
    });
  }
};

export const getEventDetails = async (dispatch, eventId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/view/${eventId}`, {
      method: "GET",
      headers: commonHeaders,
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      alert(data.detail);
      return dispatch({
        type: GET_EVENT_DETAILS_ERROR,
        payload: data,
      });
    }
    dispatch({
      type: GET_EVENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: GET_EVENT_DETAILS_ERROR,
      payload: error,
    });
  }
};

export const getMyEvents = async (dispatch, userId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/events/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": APPLICATION_JSON,
        Accept: APPLICATION_JSON,
        Authorization: localStorage.getItem("token"),
      },
      withCredentials: true,
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      alert(data.detail);
      return dispatch({
        type: GET_MY_EVENTS_ERROR,
        payload: data,
      });
    }
    dispatch({
      type: GET_MY_EVENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: GET_MY_EVENTS_ERROR,
      payload: error,
    });
  }
};

export const addEvent = async (dispatch, eventData) => {
    try {
        const response = await fetch(`${BACKEND_URL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": APPLICATION_JSON,
            Accept: APPLICATION_JSON,
            Authorization: localStorage.getItem("token"),
        },
        withCredentials: true,
        body: JSON.stringify(eventData),
        });
        const data = await response.json();
        if (!response.ok) {
        console.log(data);
        alert(data.detail);
        return dispatch({
            type: ADD_EVENT_ERROR,
            payload: data,
        });
        }
        dispatch({
        type: ADD_EVENT_SUCCESS,
        payload: data,
        });
    } catch (error) {
        return dispatch({
        type: ADD_EVENT_ERROR,
        payload: error,
        });
    }
    }
