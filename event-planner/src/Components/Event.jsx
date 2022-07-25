import React from 'react';
import { Link } from 'react-router-dom';


const Event = ({title, location, time, date} ) => {
    return ( 
        <div className='eventContainer'>
            <h1>{title}</h1>
            <h3>Location:<span>{location}</span></h3>
            <h3>When:<span>{time}, {date}</span> </h3>
            <Link to='/'>View details, but not really yet</Link>
        </div>
    )
};

export default Event;