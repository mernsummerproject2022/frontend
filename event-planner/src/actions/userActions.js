import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from "./types";
import { BACKEND_URL, APPLICATION_JSON } from "../utils/constants";

const commonHeaders = {
  "Content-Type": APPLICATION_JSON,
  Accept: APPLICATION_JSON,
};

export const signUp = async (dispatch, body) => {
  try {
    const response = await fetch(`${BACKEND_URL}/user/signup`, {
      method: "POST",
      headers: commonHeaders,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      alert(data.detail);
      return dispatch({
        type: SIGN_UP_ERROR,
        payload: data,
      });
    }
    // localStorage.setItem("token", response.data.data.token);
    alert("Successfully signed up");
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: SIGN_UP_ERROR,
      payload: error,
    });
  }
};

export const signIn = async (dispatch, body) => {
  try {
    const response = await fetch(`${BACKEND_URL}/user/login`, {
      method: "POST",
      headers: commonHeaders,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      alert(data.detail);
      return dispatch({
        type: SIGN_IN_ERROR,
        payload: data,
      });
    }
    localStorage.setItem("token", data.token);
    console.log(data);
    alert("All good!");
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: SIGN_IN_ERROR,
      payload: error,
    });
  }
};

export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    return dispatch({ type: SIGN_OUT_SUCCESS });
  };
};
