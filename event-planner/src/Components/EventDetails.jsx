import React from "react";

const EventDetails = ({
  title,
  description,
  location,
  time,
  date,
  duration,
  type,
  maxPlayers,
  invites,
  owner,
}) => {
  const inviteList = invites;

  return (
    <div className="wrapper">
      <div className="eventDetailsContainer">
        <h1>{title}</h1>
        <h4>{type}</h4>
        <h2>{description}</h2>
        <h3>
          Location:<span>{location}</span>
        </h3>
        <h3>
          When:
          <span>
            {time}, {date}
          </span>{" "}
        </h3>
        <h3>
          Duration:<span>{duration} minutes</span>
        </h3>
        <h3>
          Max Participants:<span>{maxPlayers}</span>
        </h3>
      </div>
      <div>
        <h2>Invites</h2>
        {inviteList.map((invite, index) => (
          <h4 key={index} className="invite">
            {invite.user}
            <span
              className={`${invite.status} ${owner ? "owner" : "guest"}`}
            ></span>
          </h4>
        ))}

        {owner && (
          <div>
            <h2>Invite a new friend</h2>
            <input
              type="text"
              placeholder="Email"
              name="event-title"
              autoComplete="none"
            />
            <button className="invite-btn" type="submit">
              Send Invite
            </button>
          </div>
        )}
        {!owner && (
          <div>
            <h2>Request to join</h2>
            <input
              type="text"
              placeholder="Email"
              name="event-title"
              autoComplete="none"
            />
            <button className="invite-btn" type="submit">
              Send Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
