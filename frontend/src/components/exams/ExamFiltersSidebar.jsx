import { useState } from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { examCategories } from "../../data/examData"

const ExamFiltersSidebar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedExams, setSelectedExams] = useState([]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    // Clear selected exams when changing category
    setSelectedExams([]);
    
    if (onFilterChange) {
      onFilterChange({
        category: categoryId === selectedCategory ? null : categoryId,
        exams: []
      });
    }
  };

  const handleExamChange = (exam) => {
    const updatedExams = selectedExams.includes(exam)
      ? selectedExams.filter(e => e !== exam)
      : [...selectedExams, exam];
    
    setSelectedExams(updatedExams);
    
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        exams: updatedExams
      });
    }
  };

  return (
    <motion.div 
      className="w-full md:w-1/4 space-y-6"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Search Box */}
      <motion.div 
        className="rounded-lg border bg-card p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-4">Search</h3>
        <div className="relative">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </motion.svg>
          <input
            type="search"
            placeholder="Search exam announcements..."
            className="flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </motion.div>

      {/* Exam Filters */}
      <motion.div 
        className="rounded-lg border bg-card p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-4">Exam Categories</h3>
        <div className="space-y-4">
          {/* Categories */}
          {examCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              className="border rounded-md p-3"
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleCategoryChange(category.id)}
              >
                <h4 className="font-medium">{category.label}</h4>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-gray-500"
                  animate={{ 
                    rotate: selectedCategory === category.id ? 180 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
              </div>
              
              {/* Exams List */}
              <motion.div
                className="mt-2 pl-2 space-y-2"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedCategory === category.id ? 'auto' : 0,
                  opacity: selectedCategory === category.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                {category.exams.map((exam, examIndex) => (
                  <motion.div 
                    key={exam}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: selectedCategory === category.id ? 1 : 0,
                      x: selectedCategory === category.id ? 0 : -10 
                    }}
                    transition={{ duration: 0.2, delay: 0.1 + (examIndex * 0.05) }}
                  >
                    <input
                      id={`exam-${exam}`}
                      type="checkbox"
                      checked={selectedExams.includes(exam)}
                      onChange={() => handleExamChange(exam)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    />
                    <label htmlFor={`exam-${exam}`} className="text-sm text-gray-700">
                      {exam}
                    </label>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
          
          {/* Apply Filters Button */}
          <motion.button 
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
              animate={{ rotate: [0, -10, 0, 10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </motion.svg>
            Apply Filters
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

ExamFiltersSidebar.propTypes = {
  onFilterChange: PropTypes.func
};

export default ExamFiltersSidebar 