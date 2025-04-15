import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import AnnouncementsPage from "./pages/AnnouncementsPage.jsx"
import AnnouncementDetailPage from "./pages/AnnouncementDetailPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import './App.css';
import AdmissionCalendar from "./components/AdmissionCalendar.jsx";

function App() {
  return (
    <Router>
       <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/announcements/:id" element={<AnnouncementDetailPage />} />
      <Route path="/contact" element={<AdmissionCalendar />} />
    </Routes>
    </Router>
  );
}

export default App;