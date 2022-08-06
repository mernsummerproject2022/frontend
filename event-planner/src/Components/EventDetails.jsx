import React from "react";

const EventDetails = ({ event }) => {
  const invitesToRender = event.owner
    ? event.invites
    : event.invites.filter((invite) => invite.accepted === "accepted");
  const renderRequests = event.owner && event.requests.length ? true : false;
    console.log(event);
  return (
    <div className="wrapper">
      <div className="eventDetailsContainer">
        <h1>{event.name}</h1>
        <h4>{event.eventType.name}</h4>
        <h2>{event.description}</h2>
        <h3>
          Location:<span>{event.location.name}</span>
        </h3>
        <h3>
          When:
          <span>{event.dateTime}</span>{" "}
        </h3>
        <h3>
          Duration:<span>{event.duration} minutes</span>
        </h3>
        <h3>
          Max Participants:<span>{event.maxPlayers}</span>
        </h3>
      </div>
      <div>
        <h2>Invites</h2>
        {invitesToRender.map((invite, index) => (
          <h4 key={index} className="invite">
            {invite.user}
            <span
              className={`${invite.accepted} ${
                event.owner ? "owner" : "guest"
              }`}
            ></span>
          </h4>
        ))}

        {renderRequests && (
          <div>
            <h2>Requests</h2>
            {event.requests.map((request, index) => (
              <h4 key={index} className="invite">
                {request.user}
              </h4>
            ))}
          </div>
        )}

        {event.owner && (
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

        {!event.owner && (
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