import React from 'react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
    return ( 
        <div>
            Hello, but in new page
            <Link to='/'>Press to go back</Link>
        </div>
    )
};

export default EventsPage;