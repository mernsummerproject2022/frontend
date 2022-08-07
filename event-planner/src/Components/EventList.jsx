import React from "react";
import Event from "../Components/Event";

const EventList = (props) => {
  const events = props.events;
  console.log(events);

  return (
    <div className="events_page">
      <h1 className="newest_events">Newest Events</h1>
      {events.length > 0 &&
        events.map((event, index) => (
          <Event
            key={index}
            id={event._id}
            title={event.name}
            location={event.location.name}
            time={event.dateTime}
            date={event.dateTime}
          />
        ))}
      {events.length === 0 && <h1>No events found</h1>}
    </div>
  );
};

export default EventList;
