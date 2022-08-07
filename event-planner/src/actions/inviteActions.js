import { SEND_INVITE_ERROR, SEND_REQUEST_ERROR } from "./types";
import { BACKEND_URL } from "../utils/constants";
import { fetchWrapper, handleResponse } from "../utils/fetchWrapper";

export const sendInvite = async (dispatch, inviteData) => {
    try {
        const url = `${BACKEND_URL}/view/invite/`;
        const response = await fetchWrapper.post(url, inviteData);
        handleResponse(dispatch, response, "SEND_INVITE");
    } catch (error) {
        return dispatch({
        type: SEND_INVITE_ERROR,
        payload: error,
        });
    }
}

export const sendRequest = async (dispatch, requestData) => {
    try {
        const url = `${BACKEND_URL}/view/request/`;
        const response = await fetchWrapper.post(url, requestData);
        handleResponse(dispatch, response, "SEND_REQUEST");
    } catch (error) {
        return dispatch({
        type: SEND_REQUEST_ERROR,
        payload: error,
        });
    }
}

