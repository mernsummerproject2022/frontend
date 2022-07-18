import { Route, Routes} from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import EventsPage from './EventsPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function App() {
  return (
    <>
    <div>
      <Header />
      <Routes >

        <Route path='/' element={<LandingPage />}/>
        <Route path='/events' element={<EventsPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage/>}/>

      </Routes> 
    </div>
    </>
  );
}

export default App;
