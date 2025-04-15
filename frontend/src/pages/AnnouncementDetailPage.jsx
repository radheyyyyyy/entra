import { Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function AnnouncementDetailPage() {
  const { id } = useParams()

  // This would normally fetch data based on the ID
  const announcement = {
    id: id,
    title: "IIT Delhi B.Tech Admissions 2024-25",
    description: "Applications are now open for B.Tech programs at IIT Delhi for the academic year 2024-25.",
    date: "May 15, 2024",
    tag: "Engineering",
    content: `
      <h2>Important Dates</h2>
      <ul>
        <li>Application Start Date: June 1, 2024</li>
        <li>Application End Date: June 30, 2024</li>
        <li>Entrance Examination: July 15, 2024</li>
        <li>Result Declaration: August 5, 2024</li>
        <li>Counseling Starts: August 15, 2024</li>
      </ul>
      
      <h2>Eligibility Criteria</h2>
      <p>Candidates must have:</p>
      <ul>
        <li>Qualified JEE Advanced 2024</li>
        <li>Secured at least 75% marks in 12th standard (65% for SC/ST)</li>
        <li>Passed 12th standard in 2023 or 2024</li>
      </ul>
      
      <h2>Available Programs</h2>
      <ul>
        <li>Computer Science and Engineering</li>
        <li>Electrical Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Civil Engineering</li>
        <li>Chemical Engineering</li>
        <li>Aerospace Engineering</li>
        <li>Biotechnology</li>
        <li>Engineering Physics</li>
        <li>Mathematics and Computing</li>
        <li>Production and Industrial Engineering</li>
      </ul>
      
      <h2>Application Process</h2>
      <p>Candidates need to follow these steps to apply:</p>
      <ol>
        <li>Register on the JoSAA portal</li>
        <li>Fill in personal and academic details</li>
        <li>Upload required documents</li>
        <li>Pay application fee</li>
        <li>Submit the application</li>
      </ol>
      
      <h2>Required Documents</h2>
      <ul>
        <li>JEE Advanced 2024 Admit Card</li>
        <li>JEE Advanced 2024 Score Card</li>
        <li>Class 10th Certificate and Marksheet</li>
        <li>Class 12th Certificate and Marksheet</li>
        <li>Category Certificate (if applicable)</li>
        <li>PwD Certificate (if applicable)</li>
        <li>Passport size photograph</li>
        <li>Signature</li>
        <li>Government issued ID proof</li>
      </ul>
      
      <h2>Fee Structure</h2>
      <p>The fee structure for the academic year 2024-25 is as follows:</p>
      <ul>
        <li>Tuition Fee: ₹1,00,000 per semester</li>
        <li>Hostel Fee: ₹20,000 per semester</li>
        <li>Mess Fee: ₹15,000 per semester</li>
        <li>Other Charges: ₹10,000 per semester</li>
      </ul>
      
      <h2>Scholarship Information</h2>
      <p>Various scholarships are available for meritorious students and those from economically weaker sections. For more details, visit the scholarship section on the official website.</p>
      
      <h2>Contact Information</h2>
      <p>For any queries, contact:</p>
      <p>Admission Office<br/>Indian Institute of Technology Delhi<br/>Hauz Khas, New Delhi - 110016<br/>Phone: 011-2659-7135<br/>Email: admission@iitd.ac.in</p>
    `,
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
              <Link to="/announcements" className="inline-flex items-center text-orange-600 hover:text-orange-700">
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
                  animate={{ x: [0, -3, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </motion.svg>
                Back to Announcements
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-[3fr_1fr]">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <motion.div 
                    className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800 w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    {announcement.tag}
                  </motion.div>
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
                    <span>Posted on: {announcement.date}</span>
                  </div>
                </div>
                <motion.h1 
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {announcement.title}
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-500"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {announcement.description}
                </motion.p>
              </motion.div>

              <motion.div 
                className="rounded-lg border bg-card p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: announcement.content }} />
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.button 
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5 }}
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" x2="12" y1="2" y2="15"></line>
                  </motion.svg>
                  Share
                </motion.button>
                <motion.button 
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                    animate={{ y: [0, 2, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5 }}
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </motion.svg>
                  Download PDF
                </motion.button>
                <motion.button 
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}
                  >
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect width="12" height="8" x="6" y="14"></rect>
                  </motion.svg>
                  Print
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="rounded-lg border bg-card p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    "Official Website",
                    "Application Portal",
                    "Brochure Download",
                    "Fee Structure",
                    "Scholarship Information",
                    "Contact Admission Office"
                  ].map((link, index) => (
                    <motion.li 
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                    >
                      <motion.a 
                        href="#" 
                        className="text-orange-600 hover:text-orange-700 hover:underline"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="rounded-lg border bg-card p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-lg font-semibold mb-4">Related Announcements</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "JEE Advanced 2024 Registration",
                      date: "May 10, 2024"
                    },
                    {
                      title: "IIT Bombay Admissions Open",
                      date: "May 8, 2024"
                    },
                    {
                      title: "NIT Admission Process 2024",
                      date: "May 5, 2024"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.title} 
                      className="border-b pb-2 last:border-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                      whileHover={{ x: 3 }}
                    >
                      <a href="#" className="block hover:text-orange-600">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AnnouncementDetailPage

