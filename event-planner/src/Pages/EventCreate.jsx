import React from "react";

function EventCreate() {
  return (
    <div>
      <div className="create-container">
        <h1 className="create-event-heading">Create a new event</h1>

        <div className="create-event-form">
          <input
            type="text"
            placeholder="Event title"
            name="event-title"
            autoComplete="none"
          />
          <input
            type="text"
            placeholder="Location"
            name="event-location"
            autoComplete="none"
          />
          <input
            type="date"
            placeholder="Date"
            name="event-date"
            autoComplete="none"
          />
        </div>
      </div>
    </div>
  );
}

export default EventCreate;
