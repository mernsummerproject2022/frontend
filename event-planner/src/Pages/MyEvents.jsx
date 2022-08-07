import React , {useContext} from 'react';
import EventList from '../Components/EventList';
import Searchbar from '../Components/Searchbar';
import {AppProviderContext} from '../context/AppProvider';


const MyEventsPage = () => {
    const {state} = useContext(AppProviderContext);
    
    
    return ( 
        <div className='events_page'>
            <h1 className='newest_events'>My Events</h1>
            <Searchbar />
            <EventList events={state.eventReducer.myEvents} />
        </div>
    )
};

export default MyEventsPage;