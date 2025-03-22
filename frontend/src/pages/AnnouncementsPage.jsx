import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function AnnouncementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="space-y-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Admission Announcements
              </motion.h1>
              <motion.p 
                className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Stay updated with the latest admission notifications from top educational institutions across India.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Filters Sidebar */}
              <motion.div 
                className="w-full md:w-1/4 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
                      placeholder="Search announcements..."
                      className="flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="rounded-lg border bg-card p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <h4 className="font-medium mb-2">Institution Type</h4>
                      <div className="space-y-2">
                        {["IITs", "NITs", "IIMs", "Medical Colleges", "Universities"].map((type, index) => (
                          <motion.div 
                            key={type} 
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.5 + (index * 0.05) }}
                          >
                            <input
                              id={`type-${type}`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                            />
                            <label htmlFor={`type-${type}`} className="text-sm text-gray-700">
                              {type}
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <h4 className="font-medium mb-2">Course Level</h4>
                      <div className="space-y-2">
                        {["Undergraduate", "Postgraduate", "Doctoral", "Diploma", "Certificate"].map((level, index) => (
                          <motion.div 
                            key={level} 
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: 0.6 + (index * 0.05) }}
                          >
                            <input
                              id={`level-${level}`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                            />
                            <label htmlFor={`level-${level}`} className="text-sm text-gray-700">
                              {level}
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <h4 className="font-medium mb-2">Location</h4>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">All Locations</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="pune">Pune</option>
                      </select>
                    </motion.div>

                    <motion.button 
                      className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full"
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

              {/* Announcements List */}
              <motion.div 
                className="w-full md:w-3/4 space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl font-bold">Latest Announcements</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Sort by:</span>
                    <select className="flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="relevance">Relevance</option>
                    </select>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: "IIT Delhi B.Tech Admissions 2024-25",
                      description:
                        "Applications are now open for B.Tech programs at IIT Delhi for the academic year 2024-25. Eligible candidates can apply through the JEE Advanced portal.",
                      date: "May 15, 2024",
                      tag: "Engineering",
                    },
                    {
                      id: 2,
                      title: "Delhi University UG Admission Schedule Released",
                      description:
                        "Delhi University has released the undergraduate admission schedule for the academic session 2024-25. Registration begins on June 1, 2024.",
                      date: "May 12, 2024",
                      tag: "University",
                    },
                    {
                      id: 3,
                      title: "AIIMS MBBS Entrance Exam Notification",
                      description:
                        "All India Institute of Medical Sciences has announced the dates for MBBS entrance examination for the academic year 2024-25.",
                      date: "May 10, 2024",
                      tag: "Medical",
                    },
                    {
                      id: 4,
                      title: "IIM Ahmedabad MBA Admissions 2024",
                      description:
                        "Indian Institute of Management, Ahmedabad has started the application process for MBA programs. Candidates with valid CAT scores can apply.",
                      date: "May 8, 2024",
                      tag: "Management",
                    },
                    {
                      id: 5,
                      title: "NIT Trichy B.Tech Admission Through JoSAA",
                      description:
                        "National Institute of Technology, Trichy announces B.Tech admissions through Joint Seat Allocation Authority (JoSAA) for the academic year 2024-25.",
                      date: "May 5, 2024",
                      tag: "Engineering",
                    },
                    {
                      id: 6,
                      title: "Jamia Millia Islamia Entrance Test Schedule",
                      description:
                        "Jamia Millia Islamia University has released the entrance test schedule for various undergraduate and postgraduate programs.",
                      date: "May 3, 2024",
                      tag: "University",
                    },
                    {
                      id: 7,
                      title: "NEET UG 2024 Admit Cards Released",
                      description:
                        "National Testing Agency has released the admit cards for NEET UG 2024. Candidates can download their admit cards from the official website.",
                      date: "May 1, 2024",
                      tag: "Medical",
                    },
                  ].map((announcement, index) => (
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
                            <span>{announcement.date}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{announcement.title}</h3>
                        <p className="text-gray-500">{announcement.description}</p>
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link
                            to={`/announcements/${announcement.id}`}
                            className="inline-flex items-center text-orange-600 hover:text-orange-700"
                          >
                            Read more
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
                  ))}
                </div>

                <motion.div 
                  className="flex items-center justify-center space-x-2 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                >
                  {[1, 2, 3, 4, 5].map((page) => (
                    <motion.button
                      key={page}
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${
                        page === 1 ? "bg-orange-600 text-white" : "border border-input bg-background text-gray-700"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {page}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AnnouncementsPage

