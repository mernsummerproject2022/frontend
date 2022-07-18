import { Route, Routes} from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import EventsPage from './EventsPage';

function App() {
  return (
    <>
    <div>
      <Header />
      <Routes >

        <Route path='/' element={<LandingPage />}/>
        <Route path='/events' element={<EventsPage />}/>

      </Routes> 
    </div>
    </>
  );
}

export default App;
