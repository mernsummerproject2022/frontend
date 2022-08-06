import { SEND_INVITE_ERROR } from "./types";
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

