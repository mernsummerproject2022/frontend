import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppProviderContext } from "../context/AppProvider";

const LandingPage = () => {
  const { state } = useContext(AppProviderContext);
  return (
    <div className="landing">
      <div className="landing-text">
        <div className="heading">
          Have you ever wondered what it would be like to be a click away from
          being able to gather all your friends to have fun?
          <p>Join now the best event planning app to find out</p>
        </div>
        <div className="landing-buttons">
          {state.userReducer.auth !== true && (
            <Link to="/login" className="landing-btn">
              Login
            </Link>
          )}
          {state.userReducer.auth !== true && (
            <Link to="/register" className="landing-btn">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
