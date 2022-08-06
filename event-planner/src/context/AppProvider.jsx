import React, { createContext, useEffect, useReducer } from "react";
import appReducer from "../reducers/appReducer";
import { appProviderActions } from "../actions/appProvider";

export const AppProviderContext = createContext(null);

const AppProvider = ({ children }) => {
  const location={
    name: "",
    lat: null,
    long: null
  }

  const eventType={
    name: "",
  }

  const [state, dispatch] = useReducer(appReducer, {
    userReducer: {
      auth: false,
      error: null,
      user: { id: null, email: null },
    },
    eventReducer: { events: [], myEvents: [], event:{name:"",description:"",location,dateTime:null,deadline:null,duration:null,maxPlayers:null,eventType,invites:[]} },
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

      if (decoded.exp * 1000 < new Date().getTime()) {
        localStorage.clear();
      }
      else{
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

// AppProvider.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

export default AppProvider;
