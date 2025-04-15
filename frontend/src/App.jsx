import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import AnnouncementsPage from "./pages/AnnouncementsPage.jsx"
import AnnouncementDetailPage from "./pages/AnnouncementDetailPage.jsx"
import ExamDetailsPage from "./pages/ExamDetailsPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import Chatbot from './components/chatbot/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
       <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/announcements/:id" element={<AnnouncementDetailPage />} />
      <Route path="/exams" element={<ExamDetailsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
      
      {/* Chatbot will appear on all pages */}
      <Chatbot />
    </Router>
  );
}

export default App;