import * as userActions from "./userActions";
import * as eventActions from "./eventActions";

export const appProviderActions = (dispatch) => {
  return {
    signUp: (body) => userActions.signUp(dispatch, body),
    signIn: (body) => userActions.signIn(dispatch, body),
    signOut: () => userActions.signOut(dispatch),
    getAllEvents: () => eventActions.getAllEvents(dispatch),
    getEventDetails: (eventId) => eventActions.getEventDetails(dispatch, eventId),
    getMyEvents: (userId) => eventActions.getMyEvents(dispatch, userId),
    addEvent: (eventData) => eventActions.addEvent(dispatch, eventData),
  };
};