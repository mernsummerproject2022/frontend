import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./Pages/LandingPage";
import EventsPage from "./Pages/EventsPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import EventCreate from "./Pages/EventCreate";
import EventView from "./Pages/ViewEventPage";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<EventCreate />} />
          <Route path="/view" element={<EventView />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
