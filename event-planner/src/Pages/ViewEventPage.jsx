import React from "react";
import EventDetails from "../Components/EventDetails";
import { singularEvent } from "../utils/mockedData";

const EventView = () => {
    
  return (
    <div className="events_page">
      <EventDetails event={singularEvent} />
    </div>
  );
};

export default EventView;
