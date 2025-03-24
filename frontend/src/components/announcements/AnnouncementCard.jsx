/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const AnnouncementCard = ({ announcement, index }) => {
  return (
    <motion.div 
      key={announcement.id} 
      className="rounded-lg border bg-card p-6 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
      }}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-4 w-4"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>{new Date(announcement.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold">{announcement.title}</h3>
        {/* <p className="text-gray-500">{announcement.description}</p> */}
        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <Link
            to={`${announcement.link}`}
            className="inline-flex items-center text-orange-600 hover:text-orange-700"
            target="_blank"
          >
            Link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AnnouncementCard 