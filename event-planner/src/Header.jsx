import React from "react";
import { Link } from "react-router-dom";
import "./Styling/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">Events Planner</Link>
      </h1>
      <div className="navlinks">
        <Link to="/myEvents">My events</Link>
        <Link to="/events">All events</Link>
        <Link to="/login">Sign in</Link>
      </div>
    </header>
  );
};

export default Header;
