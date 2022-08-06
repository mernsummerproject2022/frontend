import {
  SIGN_UP_ERROR,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
} from "./types";
import { BACKEND_URL} from "../utils/constants";
import { fetchWrapper, handleResponse } from "../utils/fetchWrapper";

export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    return dispatch({ type: SIGN_OUT_SUCCESS });
  };
};

export const signUp = async (dispatch, body) => {
  try {
    const url = `${BACKEND_URL}/user/signup`;
    const response = await fetchWrapper.post(url, body);
    handleResponse(dispatch, response, "SIGN_UP");
  } catch (error) {
    return dispatch({
      type: SIGN_UP_ERROR,
      payload: error,
    });
  }
};

export const signIn = async (dispatch, body) => {
  try {
    const url = `${BACKEND_URL}/user/login`;
    const response = await fetchWrapper.post(url, body);
    handleResponse(dispatch, response, "SIGN_IN");
  } catch (error) {
    return dispatch({
      type: SIGN_IN_ERROR,
      payload: error,
    });
  }
};