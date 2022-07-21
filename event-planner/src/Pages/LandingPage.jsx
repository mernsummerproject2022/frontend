import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div>Hello, this is the landing page</div>
      <Link to="/create">Create new event</Link>
    </>
  );
};

export default LandingPage;
