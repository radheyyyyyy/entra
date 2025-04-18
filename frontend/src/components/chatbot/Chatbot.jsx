import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import OptionButton from './OptionButton';

const Chatbot = () => {
  // User name state with localStorage persistence
  const [userName, setUserName] = useState(() => localStorage.getItem('entrabot_username') || '');
  const [askingName, setAskingName] = useState(() => !localStorage.getItem('entrabot_username'));
  const [inputValue, setInputValue] = useState('');

  // Initial options to display after name input
  const mainOptions = [
    { id: 'exam-announcements', text: 'Exam Announcements', action: 'showExamOptions' },
    { id: 'admission-announcements', text: 'Admission Announcements', action: 'showAdmissionOptions' }
  ];

  // Exam options from the NavigationSidebar
  const examOptions = [
    { id: 'jee-main', text: 'JEE Main', action: 'navigateToExam', examId: 'jee-main' },
    { id: 'jee-advanced', text: 'JEE Advanced', action: 'navigateToExam', examId: 'jee-advanced' },
    { id: 'neet-ug', text: 'NEET UG', action: 'navigateToExam', examId: 'neet-ug' },
    { id: 'gate', text: 'GATE', action: 'navigateToExam', examId: 'gate' },
    { id: 'neet-pg', text: 'NEET PG', action: 'navigateToExam', examId: 'neet-pg' },
    { id: 'cat', text: 'CAT', action: 'navigateToExam', examId: 'cat' },
    { id: 'back-to-main', text: 'Back to Main Menu', action: 'showMainMenu' }
  ];

  // Admission location options from announcementsData.js
  const locationOptions = [
    { id: 'gujarat', text: 'Gujarat', action: 'navigateToAdmission', locationId: 'gujarat' },
    { id: 'maharashtra', text: 'Maharashtra', action: 'navigateToAdmission', locationId: 'maharashtra' },
    { id: 'karnataka', text: 'Karnataka', action: 'navigateToAdmission', locationId: 'karnataka' },
    { id: 'west_bengal', text: 'West Bengal', action: 'navigateToAdmission', locationId: 'west_bengal' },
    { id: 'telangana', text: 'Telangana', action: 'navigateToAdmission', locationId: 'telangana' },
    { id: 'back-to-main', text: 'Back to Main Menu', action: 'showMainMenu' }
  ];

  const [messages, setMessages] = useState(() => {
    // Initialize messages based on whether we already know the user
    if (localStorage.getItem('entrabot_username')) {
      return [
        { 
          id: 1, 
          text: `Welcome back, ${localStorage.getItem('entrabot_username')}! How can I help you today?`, 
          sender: 'bot',
          options: mainOptions
        }
      ];
    } else {
      return [
        { id: 1, text: "Hello! I'm your EntraBot. What's your name?", sender: 'bot' }
      ];
    }
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus on input field when chat opens
  useEffect(() => {
    if (isOpen && askingName) {
      inputRef.current?.focus();
    }
  }, [isOpen, askingName]);

  // Handle name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const name = inputValue.trim();
    setUserName(name);
    setAskingName(false);
    
    // Save name to localStorage for persistence
    localStorage.setItem('entrabot_username', name);
    
    // Add user's name as a message
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text: name, 
      sender: 'user' 
    }]);

    // Welcome the user with their name and show main options
    setTimeout(() => {
      addBotMessage(
        `Nice to meet you, ${name}! How can I help you today?`, 
        mainOptions
      );
    }, 500);
    
    setInputValue('');
  };

  // Handle when a user selects an option
  const handleOptionSelect = async (option) => {
    // Add user's selection as a message
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text: option.text, 
      sender: 'user' 
    }]);
    
    setLoading(true);

    try {
      // Handle the action based on what was selected
      switch(option.action) {
        case 'showMainMenu':
          showMainMenu();
          break;
        case 'showExamOptions':
          showExamOptions();
          break;
        case 'showAdmissionOptions':
          showAdmissionOptions();
          break;
        case 'navigateToExam':
          navigateToExam(option.examId);
          break;
        case 'navigateToAdmission':
          navigateToAdmission(option.locationId);
          break;
        default:
          addBotMessage(`I'm not sure how to help with that yet, ${userName}.`);
      }
    } catch (error) {
      addBotMessage(
        `Sorry ${userName}, I encountered an error processing your request.`,
        [{ id: 'back', text: 'Back to Menu', action: 'showMainMenu' }]
      );
      console.error("Chatbot error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a bot message with options
  const addBotMessage = (text, options = []) => {
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text: text, 
      sender: 'bot',
      options: options 
    }]);
  };

  // Show main menu with exam and admission options
  const showMainMenu = () => {
    addBotMessage(`What would you like to know about, ${userName}?`, mainOptions);
  };

  // Show exam announcement options
  const showExamOptions = () => {
    addBotMessage(
      `Which exam are you interested in, ${userName}?`, 
      examOptions
    );
  };

  // Show admission announcement options
  const showAdmissionOptions = () => {
    addBotMessage(
      `Which location are you interested in for admissions, ${userName}?`, 
      locationOptions
    );
  };

  // Navigate to exam details page
  const navigateToExam = (examId) => {
    addBotMessage(
      `I'll take you to the ${examId.replace(/-/g, ' ').toUpperCase()} exam details page, ${userName}.`,
      [{ id: 'back', text: 'Back to Exams', action: 'showExamOptions' }]
    );
    // Navigate to exam details page using window.location to preserve state
    window.location.href = `/exams/${examId}`;
  };

  // Navigate to admission page for specific location
  const navigateToAdmission = (locationId) => {
    addBotMessage(
      `I'll show you admission information for ${locationId.replace(/_/g, ' ')} region, ${userName}.`,
      [{ id: 'back', text: 'Back to Locations', action: 'showAdmissionOptions' }]
    );
    // Navigate to admissions page with location filter
    window.location.href = `/admissions/${locationId}`;
  };

  // Toggle the chatbot open/closed
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button 
        onClick={toggleChat}
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chatbot container */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden border border-gray-200 z-40">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 font-medium flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </span>
            EntraBot
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {loading && (
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 max-w-[80%] animate-pulse mt-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            )}
            
            {/* Option buttons for the last message that has options */}
            {messages.length > 0 && 
              messages[messages.length - 1].sender === 'bot' && 
              messages[messages.length - 1].options && 
              messages[messages.length - 1].options.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {messages[messages.length - 1].options.map(option => (
                    <OptionButton 
                      key={option.id} 
                      option={option} 
                      onClick={() => handleOptionSelect(option)}
                    />
                  ))}
                </div>
              )
            }
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Name input form (only shown when asking for name) */}
          {askingName && (
            <form onSubmit={handleNameSubmit} className="p-3 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter your name..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full disabled:opacity-50 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot; 