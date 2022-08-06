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
    //     actions.addEvent({
    //         "name": "second event",
    //         "description": "one event",
    //         "dateTime": "2022-08-14T18:25:43.511Z",
    //         "deadline": "2022-08-15T18:25:43.511Z",
    //         "duration": 2,
    //         "maxPlayers": 12,
    //         "location": {
    //         "name": "address",
    //         "lat": null,
    //         "long": null
    //         },
    //         "owner": {
    //         "id":"62ee72c1d629d700221b80aa",
    //         "email": "example@gmail.com"
    //         },
    //        "eventType": "tennis"
    //        });
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