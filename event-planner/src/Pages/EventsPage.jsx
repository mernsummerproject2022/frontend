import React, { useContext } from "react";
import EventList from "../Components/EventList";
import Searchbar from "../Components/Searchbar";
import { AppProviderContext } from "../context/AppProvider";

const EventsPage = () => {
  const { state } = useContext(AppProviderContext);

  return (
    <div className="events_page">
      <Searchbar />

      <EventList events={state.eventReducer.events} />
    </div>
  );
};

export default EventsPage;
