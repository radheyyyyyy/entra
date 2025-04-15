import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import AnnouncementsPage from "./pages/AnnouncementsPage.jsx"
import AnnouncementDetailPage from "./pages/AnnouncementDetailPage.jsx"
import ExamDetailsPage from './components/exams/ExamDetailsPage.jsx';
import ContactPage from "./pages/ContactPage.jsx"
import Chatbot from './components/chatbot/Chatbot';
import './App.css';
import ExamsPage from './pages/ExamsPage.jsx';

function App() {
  return (
    <Router>
       <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/admissions" element={<AnnouncementsPage />} />
      <Route path="/announcements/:id" element={<AnnouncementDetailPage />} />
      <Route path='/exams/:name' element={<ExamDetailsPage/>} />
      <Route path='/exams' element={<ExamsPage/>}></Route>
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
      
      {/* Chatbot will appear on all pages */}
      <Chatbot />
    </Router>
  );
}

export default App;