import React from 'react';
import EventList from '../Components/EventList';
import Searchbar from '../Components/Searchbar';

const EventsPage = () => {

    return ( 
        <div className='events_page'>
            <h1 className='newest_events'>Newest Events</h1>
            <Searchbar />
            <EventList />
        </div>
    )
};

export default EventsPage;