import React from 'react';
import Event from '../Components/Event';


const EventsPage = () => {
    return ( 
        <div className='events_page'>
            <h1 className='newest_events'>Newest Events</h1>
            <div className='search'>
                <label>Search by:</label>
                <select>
                    <option>date</option>
                    <option>title</option>
                    <option>language</option>
                    <option>location</option>
                </select>
            </div>
            <Event title="Football time?" location="THE MOON" time="18:00" date="25/07/2022"/>
        </div>
    )
};

export default EventsPage;