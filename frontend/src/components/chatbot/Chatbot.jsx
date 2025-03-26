import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import OptionButton from './OptionButton';
import axios from 'axios';

const Chatbot = () => {
  // Initial options to display
  const initialOptions = [
    { id: 'announcements', text: 'Latest Announcements', action: 'fetchAnnouncements' },
    { id: 'exams', text: 'Upcoming Exams', action: 'fetchExams' },
    { id: 'contact', text: 'Contact Information', action: 'showContacts' }
  ];

  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your EntraBot. How can I help you today?", sender: 'bot', options: initialOptions }
  ]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
        case 'fetchAnnouncements':
          await fetchAnnouncements();
          break;
        case 'fetchExams':
          await fetchExams();
          break;
        case 'showContacts':
          showContactInfo();
          break;
        case 'showMainMenu':
          showMainMenu();
          break;
        case 'viewAllAnnouncements':
          window.location.href = '/announcements';
          break;
        case 'viewAllExams':
          window.location.href = '/exams';
          break;
        default:
          addBotMessage("I'm not sure how to help with that yet.");
      }
    } catch (error) {
      addBotMessage(
        "Sorry, I encountered an error processing your request.",
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

  // Fetch announcements from API
  const fetchAnnouncements = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/announcements", {
        params: { page: 1, limit: 3 }
      });
      
      // Format the announcements data with links
      const announcementsList = data.msg.map(a => 
        `📢 ${a.title}\n📅 ${new Date(a.date).toLocaleDateString()}\n${a.tag ? `🏷️ ${a.tag}\n` : ''}🔗 [Link](${a.link})\n`
      ).join('\n');
      
      addBotMessage(
        `Here are the latest announcements:\n\n${announcementsList}`, 
        [
          { id: 'more', text: 'View All Announcements', action: 'viewAllAnnouncements' },
          { id: 'back', text: 'Back to Menu', action: 'showMainMenu' }
        ]
      );
    } catch (error) {
      addBotMessage(
        "Sorry, I couldn't fetch the announcements right now.", 
        [{ id: 'back', text: 'Back to Menu', action: 'showMainMenu' }]
      );
      console.error("Announcement fetch error:", error);
    }
  };

  // Fetch exams from API
  const fetchExams = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/exams");
      
      // Format the exams data with links
      const examsList = data.length ? data.map(e => 
        `📝 ${e.name}\n📅 ${e.date}\n📌 Status: ${e.status}\n🔗 Details: ${e.link}\n`
      ).join('\n') : "No exams scheduled at the moment.";
      
      addBotMessage(
        `Here are the upcoming exams:\n\n${examsList}`, 
        [
          { id: 'more', text: 'View All Exams', action: 'viewAllExams' },
          { id: 'back', text: 'Back to Menu', action: 'showMainMenu' }
        ]
      );
    } catch (error) {
      addBotMessage(
        "Sorry, I couldn't fetch the exam information right now.",
        [{ id: 'back', text: 'Back to Menu', action: 'showMainMenu' }]
      );
      console.error("Exams fetch error:", error);
    }
  };

  // Show contact information
  const showContactInfo = () => {
    addBotMessage(
      "Contact Information:\n\n📧 Email: support@entra.edu\n📞 Phone: +91-123-456-7890\n📍 Address: Entra Education Center, Main Street, City\n\n🌐 Website: https://entra.edu\n💬 Social Media:\n- Twitter: https://twitter.com/entra\n- LinkedIn: https://linkedin.com/company/entra", 
      [{ id: 'back', text: 'Back to Menu', action: 'showMainMenu' }]
    );
  };

  // Show main menu
  const showMainMenu = () => {
    addBotMessage("What else can I help you with?", initialOptions);
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
        </div>
      )}
    </>
  );
};

export default Chatbot; 