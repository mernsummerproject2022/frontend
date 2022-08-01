import React from 'react';
import EventDetails from '../Components/EventDetails';
import { singularEvent } from '../utils/mockedData';

const EventView = () => {

    return ( 
        <div className='events_page'>
            <EventDetails 
            title={singularEvent.title} 
            description={singularEvent.description} 
            location={singularEvent.location} 
            time={singularEvent.time} 
            date={singularEvent.date} 
            duration={singularEvent.duration} 
            type={singularEvent.type} 
            maxPlayers={singularEvent.maxPlayers} 
            invites={singularEvent.invites} 
            owner={singularEvent.owner}/>
        </div>
    )
};

export default EventView;