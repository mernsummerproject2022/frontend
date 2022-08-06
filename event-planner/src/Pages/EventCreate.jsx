import React, { useState } from "react";
import NumericInput from "react-numeric-input";
import DatePicker from "react-datepicker";

function EventCreate() {
  const [startDate, setStartDate] = useState(new Date());
  const [deadlineDate, setDeadlineDate] = useState(new Date());
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

          <label for="startDate">Date of the event</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={10}
            timeCaption="time"
            dateFormat="dd.MM.yyyy - HH:mm"
            name="startDate"
            id="startDate"
          />

          <label for="deadline">Response Deadline</label>
          <DatePicker
            selected={deadlineDate}
            onChange={(date) => setDeadlineDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={10}
            timeCaption="time"
            dateFormat="dd.MM.yyyy - HH:mm"
            name="deadline"
            id="deadline"
          />

          <input
            type="text"
            placeholder="Location address"
            name="location"
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
