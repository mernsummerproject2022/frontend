import React , {useContext,useEffect} from 'react';
import EventList from '../Components/EventList';
import Searchbar from '../Components/Searchbar';
import {AppProviderContext} from '../context/AppProvider';


const EventsPage = () => {
    const {state,actions} = useContext(AppProviderContext);

    
    // useEffect(() => {
    //     actions.sendInvite({event: "62ee72f3d629d700221b80b3", user: "balicigabriel59@gmail.com"});
    // }, []);

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