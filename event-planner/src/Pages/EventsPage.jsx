import React , {useContext,useEffect} from 'react';
import EventList from '../Components/EventList';
import Searchbar from '../Components/Searchbar';
import {AppProviderContext} from '../context/AppProvider';


const EventsPage = () => {
    const {state,actions} = useContext(AppProviderContext);
    // useEffect(() => {
    // actions.getEventDetails("62e5856fdac1e65a97ab996f");
    // }, []);
    // console.log(state.eventReducer);
    // console.log(state.userReducer);
    // console.log(localStorage.getItem("token"));
    // useEffect(() => {
    //     actions.getMyEvents("62e4039355eb9c8042a317af");
    // }, []);
    // console.log(state.eventReducer);

    
    // useEffect(() => {
    //     actions.sendInvite({event: "62ee72f3d629d700221b80b3", user: "balicigabriel59@gmail.com"});
    // }, []);

    console.log(state.eventReducer);
    console.log(state.userReducer)
    return ( 
        <div className='events_page'>
            <h1 className='newest_events'>Newest Events</h1>
            <Searchbar />
            <EventList state={state} actions={actions} />
        </div>
    )
};

export default EventsPage;