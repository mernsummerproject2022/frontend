import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import  userReducer from "../reducers/userReducer";
import eventReducer from "../reducers/eventReducer";
import appReducer from "../reducers/appReducer";
import { appProviderActions } from "../actions/appProvider";


export const AppProviderContext = createContext(null);



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {userReducer: {}, eventReducer: {events:[],myEvents:[]}});
  const actions = appProviderActions(dispatch);

  useEffect(() => {
    actions.getAllEvents();
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