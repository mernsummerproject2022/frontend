import React from "react";
import moment from "moment";
import toast, { Toaster } from "solid-toast";

const notify = () => toast("Here is your toast.");

const EventDetails = ({ state, actions, event }) => {
  const [emailInvite, setEmailInvite] = React.useState("");
  const [emailRequest, setEmailRequest] = React.useState("");
  let owner = false;
  if (state.userReducer.user.id === event.owner._id) {
    owner = true;
  }

  const invitesToRender = owner
    ? event.invites
    : event.invites.filter((invite) => invite.accepted === "accepted");
  const renderRequests = owner && event.requests.length ? true : false;

  const handleSubmitRequest = () => {
    actions.sendRequest({ event: event._id, user: emailRequest });
    notify();
  };

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
          <span>{moment(event.dateTime).utc().format("YYYY-MM-DD")}</span>{" "}
        </h3>
        <h3>
          Duration:<span>{event.duration} minutes</span>
        </h3>
        <h3>
          Max Participants:<span>{event.maxPlayers}</span>
        </h3>
      </div>

      <div className="invites-container">
        <div>
          <h2>Invites</h2>
          {invitesToRender.map((invite, index) => (
            <h4 key={index} className="invite">
              {invite.user.email}
              <span
                className={`${invite.accepted} ${owner ? "owner" : "guest"}`}
              ></span>
            </h4>
          ))}

          {renderRequests && (
            <div>
              <h2>Requests</h2>
              {event.requests.map((request, index) => (
                <h4 key={index} className="invite">
                  {request.email}
                </h4>
              ))}
            </div>
          )}

          {owner && (
            <div>
              <h2 className="invite-friend-text">Invite a new friend</h2>
              <input
                type="text"
                placeholder="Email"
                name="event-title"
                autoComplete="none"
                onChange={(e) => {
                  setEmailInvite(e.target.value);
                }}
              />
              <button
                className="invite-btn"
                type="submit"
                onClick={() =>
                  actions.sendInvite({ event: event._id, user: emailInvite })
                }
              >
                Send Invite
              </button>
            </div>
          )}

          {!owner && (
            <div>
              <h2 className="invite-friend-text">Request to join</h2>
              <input
                type="text"
                placeholder="Email"
                name="event-title"
                autoComplete="none"
                onChange={(e) => {
                  setEmailRequest(e.target.value);
                }}
              />
              <button
                className="invite-btn"
                type="submit"
                onClick={handleSubmitRequest}
              >
                Send Request
              </button>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default EventDetails;
