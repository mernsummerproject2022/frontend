import React from "react";
import NumericInput from "react-numeric-input";

function EventCreate() {
  return (
    <div>
      <div className="create-container">
        <h1 className="create-event-heading">Create a new event</h1>

        <div className="create-event-form">
          <input
            type="text"
            placeholder="Event title"
            name="name"
            autoComplete="none"
          />
          <input
            type="text"
            placeholder="Event type"
            name="eventType"
            autoComplete="none"
          />

          <NumericInput min={0} placeholder="Max players" name="maxPlayers" />

          <NumericInput
            min={0}
            placeholder="Duration in minutes"
            name="duration"
          />

          <textarea
            name="description"
            placeholder="About this event..."
          ></textarea>
        </div>

        <input type="submit" className="create-btn" value={"CREATE"} />
      </div>
    </div>
  );
}

export default EventCreate;
