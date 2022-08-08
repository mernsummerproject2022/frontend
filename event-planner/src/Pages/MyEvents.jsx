import React, { useContext, useState } from "react";
import EventList from "../Components/EventList";
import Searchbar from "../Components/Searchbar";
import { AppProviderContext } from "../context/AppProvider";

const EventsPage = () => {
  const { state } = useContext(AppProviderContext);

  const [filterBy, setFilterBy] = useState([]);
    
    const toggleFilter = (payload) => {
        let filtersArr;
        if(payload.action === "add"){
            filtersArr = [...filterBy, payload.filter];
        }
        else{
            const filterIndex = filterBy.indexOf(payload.filter)
            console.log("filter Index: ", filterIndex, filterBy)
            filtersArr = [...filterBy];
            filtersArr.splice(filterIndex, 1);
        }
        setFilterBy(filtersArr);
    }
  return (
    <div className="events_page">
      <Searchbar toggleFilter={toggleFilter} filterBy={filterBy} filterList={["football", "tennis", "volleyball"]}/>
      <EventList filters={filterBy} events={state.eventReducer.myEvents} />
    </div>
  );

};

export default EventsPage;