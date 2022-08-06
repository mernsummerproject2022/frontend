import React from "react";
import Event from "../Components/Event";
const EventList = ({ state, actions }) => {
  // let events=state.eventReducer.events[0];
  console.log(state.eventReducer.events);

  return (
    <div className="events_page">
      <h1 className="newest_events">Newest Events</h1>
      {state.eventReducer.events.map((event, index) => {
        return (
          <Event
            key={index}
            id={event._id}
            title={event.name}
            location={event.location.name}
            time={event.dateTime}
            date={event.dateTime}
          />
        );
      })}
    </div>
  );
};

// return (
//     JSON.parse(events).map(event =>
//         <Event key={`event-${event.id}`} title={event.title} location={event.location} time={event.time} date={event.date}/>
//     )
// )
//};

export default EventList;