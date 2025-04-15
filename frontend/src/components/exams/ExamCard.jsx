/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const ExamCard = ({ announcement, index }) => {
  return (
    <motion.div 
      className="rounded-lg border bg-card p-4 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
      whileHover={{ 
        y: -3, 
        boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1), 0 6px 8px -6px rgba(0, 0, 0, 0.1)" 
      }}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
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
              className="mr-1 h-3 w-3"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>{new Date(announcement.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            {announcement.exam}
          </span>
        </div>
        <h3 className="text-lg font-bold">{announcement.title}</h3>
        {/* <p className="text-gray-600 text-sm">{announcement.description}</p> */}
        <div className="flex justify-end">
          <Link to={announcement.link}>
            <motion.button
              className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center"
              whileHover={{ x: 5 }}
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}


export default ExamCard 