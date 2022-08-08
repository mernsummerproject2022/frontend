import React, { useState, useContext } from "react";
import NumericInput from "react-numeric-input";
import DatePicker from "react-datepicker";
import { AppProviderContext } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";

function EventCreate() {
  const { state, actions } = useContext(AppProviderContext);

  let navigate = useNavigate();

  const [event, setEventState] = useState({
    name: "",
    description: "",
    location: { name: "", lat: null, long: null },
    duration: null,
    deadline: new Date(),
    dateTime: new Date(),
    maxPlayers: null,
    eventType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addEvent({
      name: event.name,
      description: event.description,
      dateTime: event.dateTime.toISOString(),
      deadline: event.deadline.toISOString(),
      duration: event.duration,
      maxPlayers: event.maxPlayers,
      location: {
        name: event.location.name,
        lat: null,
        long: null,
      },
      owner: {
        id: state.userReducer.user.id,
        email: state.userReducer.user.email,
      },
      eventType: event.eventType,
    });

    navigate("/myEvents");
  };

  return (
    <div>
      <div className="create-container">
        <h1 className="create-event-heading">Create a new event</h1>

        <form className="create-event-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event title"
            name="name"
            autoComplete="none"
            onChange={(e) =>
              setEventState((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Event type"
            name="eventType"
            autoComplete="none"
            onChange={(e) =>
              setEventState((prevState) => ({
                ...prevState,
                eventType: e.target.value,
              }))
            }
          />

          <label htmlFor="startDate">Date of the event</label>
          <DatePicker
            selected={event.dateTime}
            onChange={(date) =>
              setEventState((prevState) => ({
                ...prevState,
                dateTime: date,
              }))
            }
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={10}
            timeCaption="time"
            dateFormat="dd.MM.yyyy - HH:mm"
            name="startDate"
            id="startDate"
          />

          <label htmlFor="deadline">Response Deadline</label>
          <DatePicker
            selected={event.deadline}
            onChange={(date) =>
              setEventState((prevState) => ({
                ...prevState,
                deadline: date,
              }))
            }
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
            onChange={(e) =>
              setEventState((prevState) => ({
                ...prevState,
                location: { ...prevState.location, name: e.target.value },
              }))
            }
          />

          <NumericInput
            min={0}
            placeholder="Max players"
            name="maxPlayers"
            onChange={(number) =>
              setEventState((prevState) => ({
                ...prevState,
                maxPlayers: number,
              }))
            }
          />

          <NumericInput
            min={0}
            placeholder="Duration in minutes"
            name="duration"
            onChange={(number) =>
              setEventState((prevState) => ({
                ...prevState,
                duration: number,
              }))
            }
          />

          <textarea
            name="description"
            placeholder="About this event..."
            onChange={(e) =>
              setEventState((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          ></textarea>
          <input type="submit" className="create-btn" value={"CREATE"} />
        </form>
      </div>
    </div>
  );
}

export default EventCreate;
