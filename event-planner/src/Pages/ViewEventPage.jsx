import React,{useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import EventDetails from '../Components/EventDetails';
import { AppProviderContext } from '../context/AppProvider';


const EventView = () => {
    let { id } = useParams();
    const {state, actions } = useContext(AppProviderContext);
    useEffect(() => {
        actions.getEventDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);

    const event = state.eventReducer.event;
    console.log(event);
    return (
        <div className="events_page">
          <EventDetails event={event} />
        </div>
      );
};

export default EventView;