import React, { createContext, useEffect, useReducer } from "react";
import appReducer from "../reducers/appReducer";
import { appProviderActions } from "../actions/appProvider";
import { userReducer, eventReducer, inviteReducer } from "../utils/constants";
export const AppProviderContext = createContext(null);

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(appReducer, {
    userReducer,
    eventReducer,
    inviteReducer,
  });
  const actions = appProviderActions(dispatch);

  useEffect(() => {
    actions.getAllEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};


  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token !== null && token !== undefined) {
      const decoded = parseJwt(token);
      console.log(decoded);

      state.userReducer.user.email=decoded.email;
      state.userReducer.user.id=decoded.id._id;

      if (decoded.exp * 1000 < new Date().getTime()) {
        localStorage.clear();
      } else {
        actions.getMyEvents(decoded.id._id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (state.userReducer.auth === true) {
  //     actions.getMyEvents(state.userReducer.user.id);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state.userReducer.auth]);

  return (
    <AppProviderContext.Provider
      value={{
        state,
        dispatch,
        actions,
      }}
    >
      {children}
    </AppProviderContext.Provider>
  );
};


export default AppProvider;
