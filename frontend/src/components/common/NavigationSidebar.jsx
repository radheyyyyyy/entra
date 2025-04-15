import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationSidebar = ({ activeExam }) => {
  // Combined list of all entrance exams
  const entranceExams = [
    "JEE Main",
    "JEE Advanced", 
    "NEET UG",
    "GATE",
    "NEET PG",
    "CAT",
    
  ];

  return (
    <motion.div
      className="w-full md:w-1/4 space-y-6"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Entrance Exams Section */}
      <motion.div
        className="rounded-lg border bg-card p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-4">Entrance Exams</h3>
        <div className="space-y-2">
          {entranceExams.map((exam, index) => (
            <motion.div
              key={exam}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
            >
              <Link
                to={`/exams/${exam.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
                  activeExam === exam.toLowerCase().replace(/\s+/g, "-")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>{exam}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

NavigationSidebar.propTypes = {
  activeExam: PropTypes.string
};

export default NavigationSidebar; 