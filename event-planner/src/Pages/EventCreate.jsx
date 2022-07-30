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
            type="number"
            placeholder="Max players"
            name="max-players"
            autocomplete="none"
          />

          <input
            type="number"
            placeholder="Duration in minutes"
            name="duration"
            autoComplete="none"
          />

          <input
            type="date"
            placeholder="Date"
            name="event-date"
            autoComplete="none"
          />

          <textarea
            name="Text1"
            cols="40"
            rows="3"
            placeholder="About this event..."
          ></textarea>
        </div>

        <input type="submit" className="create-btn" value={"CREATE"} />
      </div>
    </div>
  );
}

export default EventCreate;
