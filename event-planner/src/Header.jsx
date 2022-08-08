import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Styling/header.css";
import { AppProviderContext } from "./context/AppProvider";

const Header = () => {
  const { actions, state } = useContext(AppProviderContext);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    actions.signOut();
    window.location.reload();
  };

  if (localStorage.getItem("token")) {
    state.userReducer.auth = true;
  }

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">Events Planner</Link>
      </h1>
      <div className="navlinks">
        {state.userReducer.auth === true && (
          <Link to="/create">Create Event</Link>
        )}
        {state.userReducer.auth === true && (
          <Link to="/myEvents">My events</Link>
        )}
        <Link to="/events">All events</Link>
        {state.userReducer.auth === false && <Link to="/login">Sign in</Link>}
        {state.userReducer.auth === true && (
          <div className="navlinks" onClick={() => handleLogOut()}>
            {" "}
            <Link to="/login">Sign Out</Link>
          </div>
        )}
        {state.userReducer.auth === true && (
          <div className="logged-as">{state.userReducer.user.email}</div>
        )}
      </div>
    </header>
  );
};

export default Header;
