import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./Pages/LandingPage";
import EventsPage from "./Pages/EventsPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import EventCreate from "./Pages/EventCreate";
import EventView from "./Pages/ViewEventPage";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <>
      <div>
        <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<EventCreate />} />
          <Route path="/view/:id" element={<EventView />} />
        </Routes>
        </AppProvider>
      </div>
    </>
  );
}

export default App;
