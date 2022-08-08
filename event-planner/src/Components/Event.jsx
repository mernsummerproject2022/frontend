import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Event = ({ id, title, location, time, date }) => {
  const route = "/view/" + id;
  return (
    <div className="eventContainer">
      <div className="flex-test">
        <h1>{title}</h1>
        <h3>
          Location:<span>{location}</span>
        </h3>
        <h3>
          When:
          <span>{moment(date).utc().format("YYYY-MM-DD")}</span>{" "}
        </h3>
        <Link to={route}>View details</Link>
      </div>
    </div>
  );
};
export default Event;
