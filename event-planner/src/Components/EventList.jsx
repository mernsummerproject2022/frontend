import React from "react";
import Event from "../Components/Event";

const filterEvents = (arrToFilter, filtersArr) => {
  if (!filtersArr || !filtersArr.length) {
    return arrToFilter;
  }

  let res = [];

  filtersArr.forEach((filter) => {
    res = [
      ...res,
      ...arrToFilter.filter((event) => {
        return event.eventType.name.toLowerCase() === filter;
      }),
    ];
  });

  return res;
};

const EventList = ({ filters, events }) => {
  const filteredEvents = filterEvents(events, filters);

  return (
    <div className="events_page">
      <h1 className="newest_events">Newest Events</h1>
      {events.length > 0 &&
        filteredEvents.map((event, index) => (
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
