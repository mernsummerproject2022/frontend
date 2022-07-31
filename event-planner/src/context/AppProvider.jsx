import React, { createContext, useEffect, useReducer } from "react";

import appReducer from "../reducers/appReducer";
import { appProviderActions } from "../actions/appProvider";

export const AppProviderContext = createContext(null);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    userReducer: {auth: false, signup:false,error:null, user: null},
    eventReducer: { events: [], myEvents: [] },
  });
  const actions = appProviderActions(dispatch);

  useEffect(() => {
    actions.getAllEvents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
