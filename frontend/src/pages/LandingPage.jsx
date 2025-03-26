import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function LandingPage() {
  return (
    <div className="flex font-sans flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="w-full max-w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  Admissions Open 2024-25
                </motion.div>
                <motion.h1 
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Your Gateway to Educational Excellence
                </motion.h1>
                <motion.p 
                  className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Stay updated with the latest admission announcements, deadlines, and requirements for top educational
                  institutions across India.
                </motion.p>
                <motion.div 
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  <Link
                    to="/announcements"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1"
                  >
                    View Announcements
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
                  >
                    Register Now
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div 
                className="mx-auto lg:ml-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    className="rounded-xl overflow-hidden shadow-lg bg-white p-4 flex items-center justify-center"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.img
                      src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png"
                      alt="AICTE logo"
                      className="h-28 object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-xl overflow-hidden shadow-lg bg-white p-4 flex items-center justify-center"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.img
                      src="https://nta.ac.in/img/logo.png"
                      alt="NTA logo"
                      className="h-28 object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />
                  </motion.div>
                  <motion.div
                    className="rounded-xl overflow-hidden shadow-lg bg-white p-4 flex items-center justify-center"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.img
                      src="data:image/jpeg;base64,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"
                      alt="ACPC Gujarat logo"
                      className="h-28 object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    />
                  </motion.div>
                </div>
                <motion.div 
                  className="text-center mt-4 text-gray-600 text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Official admission portals for engineering, medical and technical courses
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-15">
          <div className="w-full max-w-full px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need for Admissions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides comprehensive information and tools to help you navigate the admission process
                  seamlessly.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <motion.div 
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="rounded-full bg-orange-100 p-3">
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
                    className="h-6 w-6 text-orange-600"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 4, duration: 1 }}
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </motion.svg>
                </div>
                <h3 className="text-xl font-bold">Real-time Updates</h3>
                <p className="text-center text-gray-500">
                  Get instant notifications about new admission announcements and deadlines.
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="rounded-full bg-green-100 p-3">
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
                    className="h-6 w-6 text-green-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </motion.svg>
                </div>
                <h3 className="text-xl font-bold">Admission Calendar</h3>
                <p className="text-center text-gray-500">
                  Track important dates and deadlines with our interactive admission calendar.
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="rounded-full bg-blue-100 p-3">
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
                    className="h-6 w-6 text-blue-600"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </motion.svg>
                </div>
                <h3 className="text-xl font-bold">Institution Profiles</h3>
                <p className="text-center text-gray-500">
                  Explore detailed profiles of top educational institutions across India.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Announcements Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="w-full max-w-full px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest Announcements</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the most recent admission notifications from top institutions.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  title: "IIT Delhi Admissions 2024",
                  description: "Applications are now open for B.Tech programs at IIT Delhi for the academic year 2024-25.",
                  date: "May 15, 2024",
                  image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  id: 2,
                  title: "NEET Exam Updates",
                  description: "Important updates regarding NEET 2024 examination pattern and syllabus changes.",
                  date: "May 12, 2024",
                  image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  id: 3,
                  title: "MBA Admissions Open",
                  description: "Top business schools have announced their admission criteria for MBA programs starting in 2024.",
                  date: "May 10, 2024",
                  image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              ].map((announcement, index) => (
                <motion.div 
                  key={announcement.id} 
                  className="flex flex-col space-y-3 rounded-lg border bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="aspect-video w-full overflow-hidden rounded-lg mb-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={announcement.image}
                      alt={announcement.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </motion.div>
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800 w-fit">
                    New
                  </div>
                  <h3 className="text-xl font-bold">{announcement.title}</h3>
                  <p className="text-sm text-gray-500">
                    {announcement.description}
                  </p>
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
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={`/announcements/${announcement.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
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
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/announcements"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
              >
                View All Announcements
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-900 text-white">
          <div className="w-full max-w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Never Miss an Important Admission Update
                </h2>
                <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Register now to receive personalized notifications about admission announcements relevant to your
                  interests.
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1"
                  >
                    Sign Up Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1"
                  >
                    Learn More
                  </Link>
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

export default LandingPage

