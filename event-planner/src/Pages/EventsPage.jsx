import React , {useContext} from 'react';
import EventList from '../Components/EventList';
import Searchbar from '../Components/Searchbar';
import {AppProviderContext} from '../context/AppProvider';


const EventsPage = () => {
    const {state,} = useContext(AppProviderContext);

    console.log(state.eventReducer.myEvents);
    console.log(state.userReducer)
    return ( 
        <div className='events_page'>
            <h1 className='newest_events'>Newest Events</h1>
            <Searchbar />
            <EventList events={state.eventReducer.events} />
        </div>
    )
};

export default EventsPage;