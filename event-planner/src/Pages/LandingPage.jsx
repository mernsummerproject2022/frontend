import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-text">
        <div className="heading">Hello, this is the landing page</div>
        <Link to="/create">Create new event</Link>
      </div>
    </div>
  );
};

export default LandingPage;
