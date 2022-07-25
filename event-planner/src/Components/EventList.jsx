import React from 'react';
import Event from '../Components/Event';
import {events} from '../utils/mockedData';

const EventList = () => {

    return ( 
        JSON.parse(events).map(event => 
            <Event key={`event-${event.id}`} title={event.title} location={event.location} time={event.time} date={event.date}/>
        )
    )
};

export default EventList;